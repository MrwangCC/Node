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
    /**
     * 什么叫做浏览器给服务器响应了
     *     1. 服务器给浏览器一段文字
     *     2. 服务器给浏览器一个图片
     *     3. 服务器给浏览器一个视频
     *     4. 服务器告诉浏览器下载一个文件
     *     5. 服务器告诉浏览器重定向
     *     备注：多个响应以response.send为主
     */
    // response.download('day05/2.路由/public/jiaojiao.jpg');
    // response.sendFile(__dirname + '/public/jiaojiao.jpg');
    // response.redirect('/demo/test');
    // response.set('demo', 'wangxiwen');
    response.status(404);
    response.send('我是demo路由返回的数据');
    // console.log(response.get('ETag'));
    // response.send('还有东西');   // 会抛一个异常，不能send两次
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