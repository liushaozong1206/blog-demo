/**
 * 作者：刘少宗
 * 时间：2017/3/3
 * 描述：当前文件描述
 */
var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

module.exports = mongoose.model('User',usersSchema);
