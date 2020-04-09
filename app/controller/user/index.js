const User = require("../../model/user.model");
const BaseController = require("../BaseController");
class UserController extends BaseController {
  constructor() {
    super();
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  async getUserInfo(ctx, next) {
      let user = await User.create({ firstName: "John Doe", lastName: "senior engineer" })
      this.formatData({ ctx: ctx, data: { user } })
  }

  async saveUser(ctx, next) {
    await next();
    let data = await new User({
      _id: new mongoose.Types.ObjectId(),
      username: ctx.request.query.username,
      password: ctx.request.query.password
    }).save();
    this.formatData({
      ctx: ctx,
      data: data
    });
  }
}

module.exports = new UserController();
