const User = require('../../model/UserModel')

const BaseController = require('../BaseController')
class UserController extends BaseController {
    constructor() {
        super()
        this.login = this.login.bind(this)
        this.getUserInfo = this.getUserInfo.bind(this)
    }
    async login(ctx, next) {
        let body = ctx.request.body
        const user = await User.findOne({
            where: {
                username: body.username,
            },
        })

        if (user) {
            if (user.dataValues.password !== body.password) {
                this.formatData({
                    ctx: ctx,
                    code: 500,
                    message: '当前用户密码错误',
                })
            } else {
                this.formatData({ ctx: ctx, message: '登录成功' })
            }
        } else {
            let newUser = await User.create({
                username: body.username,
                password: body.password,
            })
            this.formatData({ ctx: ctx, code: 500, message: '创建新用户成功' })
        }
    }
    async getUserInfo(ctx, next) {
        const { count, rows } = await User.findAndCountAll({
            where: {},
            offset: 1,
            limit: 10,
        })
        this.formatData({ ctx: ctx, data: { count: count, rows: rows } })
    }
}
module.exports = new UserController()
