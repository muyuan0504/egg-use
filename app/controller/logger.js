const Controller = require('egg').Controller

class LoggerController extends Controller {
    index() {
        const { ctx } = this

        ctx.body = 'logger manage service'
    }
}

module.exports = LoggerController
