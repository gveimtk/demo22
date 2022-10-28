const express=require("express");

//获取路由对象
const router=express.Router();
const controller = require('../controller/controller')
//登录
router.get('/getCookie',controller.getCookie)
router.post('/getBus',controller.getBus)
router.post('/login',controller.login)
router.get('/getCaptch',controller.getCaptch)
//导出
module.exports = router