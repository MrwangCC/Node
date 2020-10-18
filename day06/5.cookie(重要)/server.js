let express = require('express');
let cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());

// demo路由不对cookie进行任何操作
app.get('/demo', (req, res) => {
    res.send('demo路由，没有对cookie进行任何的操作');
});

// 会话cookie，关闭浏览器立刻消失
// demo1路由，负责给客户端“种”下一个会话cookie 
app.get('/demo1', (req, res) => {
    // express中给客户端种cookie不需要任何的库
    let obj = {
        school: 'GUET',
        subject: '网络工程'
    }
    res.cookie('peiqi', JSON.stringify(obj)); // 给客户端种下一个会话cookie
    res.send('demo1路由，种下了一个【会话cookie】');
});

// demo2路由，负责给客户端“种”下一个持久化cookie 
app.get('/demo2', (req, res) => {
    res.cookie('peiqi', 'hello', {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }); // 给客户端种下一个持久化cookie
    res.send('demo2路由，种下了一个【持久化cookie】');
});

// demo3路由，负责读取客户端所携带过来的cookie
app.get('/demo3', (req, res) => {
    // express中读取客户端携带过来的cookie要借助一个库，名为：cookie-parser
    console.log(req.cookies);
    const {
        peiqi
    } = req.cookies;
    let a = JSON.parse(peiqi);
    console.log(a.school);
    res.send('demo3路由，我读取了你携带过来的cookie，去服务器控制台看看');
});

// demo4路由，负责告诉客户端删除一个cookie
app.get('./demo4', (req, res) => {
    res.cookie('peiqi', '', {
        maxAge: 0
    });
    res.clearCookie('peiqi');
    res.send('删除了所保存的key为peiqi的cookie');
});

app.listen(3000, err => {
    !err ? console.log('演示cookie服务器启动成功') : console.log(err);
});