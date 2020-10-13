// 引入express
const experss = require('express');

// 1. 创建app服务对象
const app = experss();

// 2. 配置路由  -----   对请求的URL进行分类，服务器根据分类决定交给谁去处理
/**
 * 1. 路由可以理解为：一组组key -- value的组合；key：请求方式 + URI路径，value：回调函数
 * 2. 根据路由定义的顺序(写代码的顺序)，一次定义好路由，随后放入一个类似数组的结构，当有请求时，以此去除匹配。若匹配成功，不再继续匹配
 */

// 根路由
app.get('/', function (requset, response) {
    /** 
     * 问题：什么样的请求，能交给这个回调函数处理？
     *     1. 请求方式必须为GET
     *     2. 请求的URI必须为：'/haha'
    */
   console.log(requset.query);
    response.send('主页');
});
// 一级路由
app.get('/haha', function (requset, response) {
    response.send('哈哈');
});
// 二级路由...

// 3. 指定服务器运行的端口号(绑定端口监听)
app.listen(3000, err => {
    !err ? console.log('服务器启动成功') : console.log(err);
});