let BaseController = require('../BaseController')
class UserController extends BaseController {
    constructor() {
        super()
        this.getUserInfo = this.getUserInfo.bind(this)
    }
    async getUserInfo(ctx, next) {
        await next()
        ctx.body = '测试'
    }
}
module.exports = new UserController()