/**
 * 作者：刘少宗
 * 时间：2017/3/3
 * 描述：当前文件描述
 */

var mongoose = require('mongoose');

//用户表结构
module.exports = new mongoose.Schema({

    //用户名
    username:String,
    //密码
    password:String

});