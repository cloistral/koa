class BaseController {
    constructor() {
        this.formatData = this.formatData.bind(this)
    }

    async formatData(...paramList) {
        let param = paramList[0]
        let ctx = param.ctx
        let code = param.code || 200
        ctx.response.body = {
            code: param.code || 200,
            status: code !== 200 ? 'error' : 'success',
            message:
                code !== 200
                    ? param.message
                        ? param.message
                        : '请求失败'
                    : param.message
                    ? param.message
                    : '请求成功',
            data: param.data,
        }
    }

    async throwError(...paramList) {
        let param = paramList[0]
        let ctx = param.ctx
        ctx.throw(400)
        ctx.throw(400, 'name required')
    }
}

module.exports = BaseController
