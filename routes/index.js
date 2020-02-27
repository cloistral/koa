const router = require('koa-router')()

router.get('/getUserInfo', require('../app/controller/user/index').getUserInfo)
router.get('/saveUser', require('../app/controller/user/index').saveUser)


module.exports = router
