// 引入express
const express = require('express');
// 创建app应用对象
const app = express();
// 禁止服务器返回X-Powered-By，为了安全
app.disable('x-powered-by');
// 使用了内置中间件暴露静态资源，不访问路由直接写文件名 + 后缀也能看页面
app.use(express.static(__dirname + '/public'));
// 引入模型对象，进行CRUD
const usersModel = require('./model/usersModel')
// 引入db模块，用于连接数据库
const db = require('./db/db');
// 使用内置中间件，用于解析post请求的urlencoded参数
app.use(express.urlencoded({
    extended: true
}));
// 引入UI路由器
const UIRouter = require('./router/UIRouter');
// 引入登录注册路由器
const LoginRegisterRouter = require('./router/LoginRegisterRouter');

// 如果数据库连接成功，随后立即启动服务器，在整个过程中，无论多少次请求，数据库只连接一次
db(() => {
    // 使用UIRouter
    app.use(UIRouter());
    // 使用LoginRegisterRouter
    app.use(LoginRegisterRouter());
    
    // 绑定端口监听
    app.listen(3000, err => {
        !err ? console.log('服务器启动成功！') : console.log('服务器启动失败！', err);
    });
}, err => {
    console.log(err);
});