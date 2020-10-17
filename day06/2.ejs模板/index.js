const experss = require('express');

const app = experss();

// 让你的服务器知道你在用哪一个模板引擎  -----  配置模板引擎
app.set('view engine', 'ejs');
// 让你的服务器知道你的模板在哪个目录下，配置模板目录
app.set('views', __dirname + '/haha');

// 如果在express中基于Node搭建的服务器，使用ejs无需引入

app.get('/show', (request, response) => {
    let personArr = [{
        name: '张三',
        age: 18
    }, {
        name: '李四',
        age: 19
    }, {
        name: '王五',
        age: 20
    }];
    response.render('person', {
        persons: personArr
    });
})

// 3. 指定服务器运行的端口号(绑定端口监听)
app.listen(3000, err => {
    !err ? console.log('服务器启动成功') : console.log(err);
});