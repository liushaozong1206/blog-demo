/**
 * 作者：刘少宗
 * 时间：2017/3/3
 * 描述：入口文件
 */

//加载express模块
var express = require('express');
//加载模版处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose')

//创建app应用 ==>NodeJS Http.createServer();
var app = express();

//设置静态文件托管
//当用户访问的url以/public开始,那么直接反回对应的__dirname + '/public'下的文件
app.use('/public',express.static(__dirname + '/public'))



//配置应用模版
//定义当前应用所使用的模版引擎
//第一个参数：模版引擎名称，同时也是模版文件的后缀,第二个参数表示用于解析处理模版内容的方法
app.engine('html',swig.renderFile)
//设置模版文件存放的目录,第一个参数必须是views，第二个参数是目录
app.set('views','./views');
//注册所使用的模版引擎,第一个参数必须是view engine ,第二个参数和app.engine这个方法中定义的模版引擎的名称（第一个参数）是一致的
app.set('view engine','html');
//在开过程中，需要取消模版缓存
swig.setDefaults({cache:false})

//根据不同的功能划分模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));


/*app.get('/',function(req,res,next){
    //res.send('<h1>欢迎</h1>')
    //读取views目录下的指定文件，解析并返回给客户端
    //第一个参数，表示模版的文件，相对于views目录
    //第二个参数，传递给模版使用的数据
    res.render('index')
})*/


//监听Http请求
//链接数据库
mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log('数据库链接失败')
    }else{
        console.log('数据库链接成功');
        app.listen(8080);
    }
})

