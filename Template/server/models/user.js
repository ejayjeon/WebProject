const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 20
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 10
    },
    phone: {
        type: String,
        maxlength: 14
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})
// User를 저장하기 전에 function()을 준다
userSchema.pre('save', function(next) {
    var user = this;
// 비밀번호를 암호화 시킨다 : 비밀번호를 바꿀 때만
    if(user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err)
            user.password = hash;
            next()
            // next는 바로 index.js의 save로 가버리는 것
        })
    })
    } else {
        next()
        // 만약에 비밀번호를 바꾸는 게 아니라 다른 것을 바꾸는 거라면 next()를 해주어야 한다
    }
})
userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword: 12345678
    // 암호화된 비밀번호: -> 복호화 할 수는 없다 
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err),
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기

    var token = jwt.sign(user._id.toHexString(), 'secret')
    user.token = token;
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
    // user._id + 'secret' = token
    // => 'secret' -> user._id
}

userSchema.statics.findByToken = function( token, cb) {
    var user = this;
    jwt.verify(token, 'secret', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({'_id' : decoded, "token": token}, function(err, user) {
            if(err) return cb(err);
            cb(null, user)
        })
    })
}
const User = mongoose.model('user', userSchema)
module.exports = { User };