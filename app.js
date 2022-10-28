const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

//引入小图标模块
const favicon = require("serve-favicon")

//引入日志模块
const morgan = require('morgan')

//引入处理路径
const path = require('path')

//引入路由文件
const router = require('./routes/router')
//post请求模块
const bodyParser = require("body-parser")

//引入session模块
const session = require('express-session')
//post 数据读取
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//使用小图片
app.use(favicon(__dirname + "/img/favicon1.ico"))

//使用日志
app.use(morgan('dev'))



//添加静态资源路径
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname))
//使用路由文件
app.use(router)
app.listen(9241, function () {
  //这个函数也是一个回调函数
  //当服务创建好后，端口号也开始监听了过后，就会执行这个函数
  console.log('端口号9241');
})