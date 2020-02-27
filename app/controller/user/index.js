const User = require("../../model/user.model");
const mongoose = require('mongoose')
const BaseController = require('../BaseController')
class UserController extends BaseController {
    constructor() {
        super()
        this.getUserInfo = this.getUserInfo.bind(this)
    }
    async getUserInfo(ctx, next) {
        let data = await User.find()
        this.formatData({
            ctx: ctx,
            data: data
        })
    }

    async saveUser(ctx, next) {
        await next()
        let data = await new User({
            _id: new mongoose.Types.ObjectId(),
            username: ctx.request.query.username,
            password: ctx.request.query.password,
        }).save()
        this.formatData({
            ctx: ctx,
            data: data
        })
    }

}

module.exports = new UserController()