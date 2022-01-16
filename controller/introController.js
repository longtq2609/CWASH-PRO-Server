let uniqid = require('uniqid');
let fs = require('fs');

let New = require('../model/New');

module.exports.getAllIntro = async (req, res) => {
    await New.find({}).then((data) => {
        res.render('introduce/Introduces', {layout: 'temp/index', title: "Bảng tin", err: false, data:data.reverse()})
    }, (err) => {
        res.render('error/404', {layout: 'temp/index', title: "Có lỗi xảy ra !", err: true, message: err})
    }).catch((err) => {
        res.render('error/404', {layout: 'temp/index', title: "Có lỗi xảy ra !", err: true, message: err})
    })
}

module.exports.getIntroUsing = async (req, res) => {
    await New.find({status:true}).then((data) => {
        res.render('introduce/Introduces', {layout: 'temp/index', title: "Những tin đang sử dụng", err: false, data:data.reverse()})
    }, (err) => {
        res.render('error/404', {layout: 'temp/index', title: "Có lỗi xảy ra !", err: true, message: err})
    }).catch((err) => {
        res.render('error/404', {layout: 'temp/index', title: "Có lỗi xảy ra !", err: true, message: err})
    })
}



