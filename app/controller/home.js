/**
 * 基于 MVC 架构模式，Controller负责接收来自客户端的请求，调用相应的Service层方法来处理请求，并返回相应的响应给客户端。
 * 
 * 解析用户的输入，处理后返回相应的结果
 * 
 * Context
 * Context 是一个请求级别的对象,在每次收到用户请求时，框架都会实例化一个 Context 对象,框架会将所有的 [Service] 挂载到 Context 实例上
 * 获取 Context 实例的最常见方式是在 [Middleware]、[Controller] 以及 [Service] 中
 * 
 * ctx: 当前请求的 Context 实例
 * app: 应用的 Application 实例
 *
 * <控制器应保持轻量级，不包含具体的业务逻辑，主要负责路由请求和处理HTTP相关逻辑>
 */
const path = require('path')
const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        const { ctx } = this
        // read config 见 config\config.default.js -> (这里的 this 指向 app 上下文，所以直接可以通过 this.config 读取config配置)
        const config = this.config.mockConfig
        const text = ctx.service.home.index()
        ctx.body = 'Hello world !' + JSON.stringify(config) + text
    }
    /** 页面渲染
     * 使用 assets 模板引擎：assets 模板引擎并非服务端渲染，而是以一个静态资源文件作为入口，使用基础模板渲染出 HTML，并将这个文件插入到 HTML
     * 1. 安装 assets 模板库 pnpm add egg-view-assets
     * 2. 开启 assets 插件 config\plugin.js
     * 3. 修改模板配置 config\config.default.js
     */
    async render() {
        const { ctx } = this
        // await ctx.render(
        //     'index.js',
        //     {},
        //     {
        //         templatePath: path.join(this.app.config.baseDir, 'app/view/assets.html'),
        //         templateViewEngine: 'nunjucks',
        //     }
        // )
        // await ctx.reander('index.js')
        ctx.body = 'render router'
    }
}

module.exports = HomeController
