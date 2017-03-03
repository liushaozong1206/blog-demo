/**
 * 作者：刘少宗
 * 时间：2017/3/3
 * 描述：当前文件描述
 */

var express = require('express');
var router = express.Router();

router.get('/user',function(req,res,next){
    res.send('api')
});

module.exports = router;
