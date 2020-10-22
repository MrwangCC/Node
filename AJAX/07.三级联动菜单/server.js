let express = require('express');
let db = require('./db');
let citiesModel = require('./model/citiesModel');

let app = express();
app.use(express.static(__dirname + '/public'));

db(() => {
    // 获取中国所有省份信息
    app.get('/get_all_province', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        citiesModel.find({
            level: 1
        }, {
            province: 1,
            name: 1,
            _id: 0
        }, (err, data) => {
            if (!err && data) {
                res.send({
                    status: 1,
                    data
                });
            } else {
                res.send({
                    status: 0,
                    err
                });
            }
        });
    });

    // 根据【省份编码】，获取某省下的所有市信息
    app.get('/get_cities_by_province', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const {
            province
        } = req.query;
        citiesModel.find({
            level: 2,
            province
        }, {
            city: 1,
            name: 1,
            _id: 0
        }, (err, data) => {
            if (!err && data) {
                res.send({
                    status: 1,
                    data
                });
            } else {
                res.send({
                    status: 0,
                    err
                });
            }
        });
    });

    // 根据【省份编码】，【市编码】获取某省下某市下的所有区/县信息
    app.get('/get_counties_by_province_and_city', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const {
            province,
            city
        } = req.query;
        citiesModel.find({
            level: 3,
            province,
            city
        }, {
            county: 1,
            name: 1,
            _id: 0
        }, (err, data) => {
            if (!err && data) {
                res.send({
                    status: 1,
                    data
                });
            } else {
                res.send({
                    status: 0,
                    err
                });
            }
        });
    });

    app.listen(3000, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('服务器启动成功');
        }
    });
}, (err) => {
    console.log(err);
});