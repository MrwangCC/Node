let express = require('express');

const app = express();
// 用于解析post请求体参数，参数的编码类型必须为：urlencoded
app.use(express.urlencoded({
    extended: true
}));

// 暴露静态资源
app.use(express.static(__dirname + '/public'));

// 返回验证码的路由，每当有人请求该路由，该路由就会返回一个1000-9999的随机数
app.get('/get_code', (req, res) => {
    console.log('有人要验证码');
    setTimeout(() => {
        let authCode = Math.floor(Math.random() * 8999 + 1000);
        res.send(authCode.toString());
    }, 2000);
});

app.listen(3000, err => {
    if (err) {
        console.log('服务器启动失败：', err);
    } else {
        console.log('服务器启动成功');
        console.log('练习取消上一次请求');
        console.log('点击此处：http://localhost:3000/verifiCode.html');
    }
});