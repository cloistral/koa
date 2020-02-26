const router = require('koa-router')()

router.get('/getUserInfo', require('../controller/user/index').getUserInfo)

module.exports = router
