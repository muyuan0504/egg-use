/**
 * 基于 MVC 架构模式，Controller负责接收来自客户端的请求，调用相应的Service层方法来处理请求，并返回相应的响应给客户端。
 *
 * <控制器应保持轻量级，不包含具体的业务逻辑，主要负责路由请求和处理HTTP相关逻辑>
 */

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        // read config 见 config\config.default.js -> (这里的 this 指向 app 上下文，所以直接可以通过 this.config 读取config配置)
        const config = this.config.mockConfig
        this.ctx.body = 'Hello world !' + JSON.stringify(config)
    }
}

module.exports = HomeController
