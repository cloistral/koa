var mongoose = require("mongoose");
var UsersSchema = require('../schemas/user.schema')
var User = mongoose.model("user", UsersSchema);
module.exports = User;