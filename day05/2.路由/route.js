let express = require('express');

let app = express();

// request和response都有什么API
/**
 * 1. request：
 *     request.query：获取查询的字符串参数(query参数)，拿到的是一个对象
 *     request.params：获取get请求参数路由的参数，拿到的是一个对象
 *     request.body：获取post请求体，拿到的是一个对象(要借助一个中间件)
 *     request.get(xxxx)：获取请求头中指定key对应的value
 * 2. response：
 *     response.send()：给浏览器做出一个响应
 *     renponse.end()：给浏览器做出一个响应(不会自动追加响应头)
 *     response.download()：告诉浏览器下载一个文件
 *     renponse.sendFile()：给浏览器发送一个文件
 *     response.redirect()：重定向到一个新的地址(url)
 *     response.set(header,value)：自定义响应头内容
 *     response.get()：获取响应头指定key对应的value
 *     res.status(code)：设置响应状态码
 */

// 根路由
app.get('/', (request,response) => {
    console.log(request.query);
    console.log(request.get('Host'));
    console.log(request.get('Referer'));
    response.send('我是根路由返回的数据--get');
});
// 根路由
app.post('/', (request,response) => {
    console.log(request.body);
    response.send('我是根路由返回的数据--post');
});
// 一级路由
app.get('/demo', (request,response) => {
    response.download(__dirname + './jiaojiao.jpg')
    // response.send('我是demo路由返回的数据');
});
// 二级路由
app.get('/demo/test', (request,response) => {
    console.log(request.query);
    response.send('我是demo/test路由返回的数据--get');
});
// 参数路由 --- 可以动态接受参数
app.get('/meishi/:id', (request,response) => {
    console.log(request.params);
    let {id} = request.params;
    response.send(`我是${id}商家`);
});


app.listen(3000, err => {
    !err ? console.log('服务器启动成功') : console.log(err);
});