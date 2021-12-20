const mongoose = require('mongoose');
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
const User = mongoose.model('User', userSchema)
module.export = { User }