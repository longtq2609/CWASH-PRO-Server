let mongosee = require('mongoose');

let userSchema = new mongosee.Schema({
    phoneNumber:{
        type:String,
        required:true
    },
    fullName: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    passWord: {
        type: String,
        required: true
    },
    role: {
        type:String,
        required:true,
        default:"Customer"
    },
    avatar: {
        type:String,
        required:true,
        default:'images/img.png'
    },
    tokenDevice: {
        type:String,
        default: ""
    },
    status: {
        type:Boolean,
        required:true,
        default:true
    },
})
module.exports = mongosee.model('User', userSchema,'user');
