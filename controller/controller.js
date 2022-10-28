const request = require('request')

// 引入数据库连接
const db = require('../config/dbpoll')

const mycontroller = {
    getCookie(req, res) {
        request({
            url: 'https://i.hzmbus.com/webhtml/',
            json: true
        }, (err, data, body) => {
            res.json(data)
        })
    },
    getBus(req, res) {
        request({
            url: 'https://i.hzmbus.com/webh5api/manage/query.route',
            json: true,
            headers: {
                "content-type": "application/json",
                "Cookie": `Hm_lvt_ecfd5c356fd652f819555c3c77fd1626=${String(new Date().getTime()).slice(0, 10)};acw_sc__v2=635b46eab08e4458122aad6cd63790f7bbead34a;PHPSESSID=mdbtf12dsjvvhojgj054ljggj8`
            },
        }, (err, data, body) => {
            // res.setHeader('Set-Cookie', data.headers['set-cookie'])
            res.send({
                data: data,
                msg: '请求成功',
                code: 200
            })
        })
    },
    login(req, res) {
        request({
            url: 'https://i.hzmbus.com/webh5api/login',
            json: true,
            headers: req.body.headers,
            body: {
                "webUserid": req.body.username,
                "passWord": req.body.password,
                "code": "",
                "appId": "HZMBWEB_HK",
                "joinType": "WEB",
                "version": "2.7.2032.1243",
                "equipment": "PC"
            }
        }, (err, data, body) => {
            res.json(body)

        })
    },
    buyTicket(req, res) {
        request({
            url: 'https://i.hzmbus.com/webh5api/ticket/buy.ticket',
            json: true,
            headers: {
                "content-type": "application/json",
                'Cookie': req.body.Cookie,
            },
            body: {
                "webUserid": req.body.username,
                "passWord": req.body.password,
                "code": "",
                "appId": "HZMBWEB_HK",
                "joinType": "WEB",
                "version": "2.7.2032.1243",
                "equipment": "PC"
            }
        }, (err, data, body) => {
            res.json(body)

        })
    },
    getCaptch(req, res) {
        request({
            url: 'https://i.hzmbus.com/webh5api/captcha',
            json: true,
            headers: {
                'Accept-Encoding': 'gzip, deflate'
            },
            encoding: null,
            method:'post'

        }, (err, data, body) => {
            // res.setHeader('Set-Cookie', data.headers['set-cookie'])
            res.send({
                data: data,
                msg: '请求成功',
                code: 200
            })
        })
    }
}
module.exports = mycontroller