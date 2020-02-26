const views = require('koa-views')
const index = require('./routes/index')
const users = require('./routes/users')
app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})