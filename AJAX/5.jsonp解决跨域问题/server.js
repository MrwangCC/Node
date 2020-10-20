let express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
    let {
        callback
    } = req.query;
    console.log(callback);
    let personArr = [{
        name: '王曦文',
        age: 24
    }, {
        name: '杨凤娇',
        age: 13
    }];
    res.send(`${callback}(${JSON.stringify(personArr)})`);
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('演示jsonp解决跨域问题服务器，启动成功');
        console.log('使用编译器打开网页，用以解决跨域问题');
    }
})