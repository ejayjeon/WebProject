const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const e = require('express');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
    email : {
        type: String,
        trim: true,
        maxlength: 50
    },
    pwd : {
        type: String,
        maxlength: 20
    },
    alias : {
        type: String,
        maxlength: 20
    },
    name : {
        type: String,
        maxlength: 10
    },
    phone : {
        type: String,
        maxlength: 13
    },
    gender : {
        type: String,
        maxlength: 2
    },
    birth : {
        type: Date
    },
    role : {
        type: Number,
        default: 1
    },
    profile : { 
        type : String 
    },
    token : { 
        type : String 
    },
    tokenExp : { 
        type: Number 
    }
})

userSchema.pre('save', function( next ) {
    var user = this;

    if(user.isModified('pwd')) {
        bcrypt.genSalt(saltRounds, function(에러, salt) {
            if(에러) return next(에러)
            bcrypt.hash( user.pwd, salt, function(에러, hash) {
                if(에러) return next(에러)
                user.pwd = hash;
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.비밀번호비교 = function( 일반비밀번호, 콜백 ) {
    // 일반비밀번호와 데이터베이스에 암호화된 비밀번호가 같은지 체크
    // 일반비밀번호를 암호화 한다음에 데이터베이스 비밀번호와 체크
    bcrypt.compare(일반비밀번호, this.pwd, function(에러, isMatch) {
        if(에러) return 콜백(에러)
        콜백(null, isMatch) // 에러가 없다면 에러자리에 null / isMatch 가 true
    })
}

userSchema.methods.generateToken = function( 콜백 ) {
    // JSON-WEB-TOKEN을 이용해서 token 생성
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    //user._id + 'secretToken' = token
    user.token = token
    user.save(function(에러, 유저) {
        if(에러) return 콜백(에러)
        콜백(null, 유저)
    })
}

userSchema.statics.findByToken = function(token, 콜백) {
    var user = this;
    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(에러, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 다음에 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
    user.findOne({"_id": decoded, "token": token}, function(에러, user) {
        if(에러) return 콜백(에러);
        콜백(null, user)
    })
    })
}


const User = mongoose.model('User', userSchema)
module.exports = { User }