
//引入数据库
const mysql = require('mysql')

//使用数据库
var db = mysql.createConnection({
    host:"localhost",//主机地址
    port:"3306",//端口号 3306
    user:"root",    //账号
    password:"root", //密码
    database:"test"
})

module.exports = db;