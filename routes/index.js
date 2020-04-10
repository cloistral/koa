var Router = require("koa-router");
const router = new Router({
    prefix: "/api"
});
const userController = require("../app/controller/user/index");
router
    .post("/login", userController.login) //登录接口
    .get("/getUserInfo", userController.getUserInfo); //获取用户信息接口

module.exports = router;
