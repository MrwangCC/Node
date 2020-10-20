let express = require('express');

const app = express();
// 用于解析post请求体参数，参数的编码类型必须为：urlencoded
app.use(express.urlencoded({
    extended: true
}));

// 暴露静态资源
app.use(express.static(__dirname + '/public'));

app.get('/ajax_get', (req, res) => {
    console.log('有人发了个get请求');
    console.log(req.query);
    res.send('发来的是get请求');
});
app.post('/ajax_post', (req, res) => {
    console.log('有人发了个post请求');
    console.log(req.body);
    res.send('发来的是post请求');
});

app.listen(3000, err => {
    if (err) {
        console.log('服务器启动失败：', err);
    } else {
        console.log('服务器启动成功');
        console.log('点击此处：http://localhost:3000/ajax_get.html');
        console.log('点击次数：http://localhost:3000/ajax_post.html');
    }
});