
var mongoose = require('mongoose'),
DB_URL = 'mongodb://localhost:27017/user';
/**
* 连接
* useNewUrlParser:true
*/
mongoose.set('useFindAndModify', false);
const options = {
useNewUrlParser : true,
useUnifiedTopology: true,
autoIndex: false, // Don't build indexes
reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
reconnectInterval: 500, // Reconnect every 500ms
poolSize: 10, // Maintain up to 10 socket connections
// If not connected, return errors immediately rather than waiting for reconnect
bufferMaxEntries: 0
};
mongoose.connect(DB_URL, options).then(
() => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
err => { throw err }
);

// /**
//  * 连接成功
//  */
// mongoose.connection.on('connected', function () {
//     console.log('Mongoose connection open to ' + DB_URL);
// });

// /**
//  * 连接异常
//  */
// mongoose.connection.on('error', function (err) {
//     console.log('Mongoose connection error: ' + err);
// });

// /**
//  * 连接断开
//  */
// mongoose.connection.on('disconnected', function () {
//     console.log('Mongoose connection disconnected');
// });

module.exports = mongoose;


