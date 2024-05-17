/**
 * 基于 MVC 架构模式，Controller负责接收来自客户端的请求，调用相应的Service层方法来处理请求，并返回相应的响应给客户端。
 *
 * app/controller/** 用于解析用户的输入，处理后返回相应的结果
 *
 * <控制器应保持轻量级，不包含具体的业务逻辑，主要负责路由请求和处理HTTP相关逻辑>
 * 
 * Cotroller基类核心属性 < Service 基类的属性和 Controller 基类属性一致 >:
 * ctx - 当前请求的 Context 实例
 * app - 应用的 Application 实例
 * config - 应用的配置
 * service - 应用的所有 service
 * logger - 为当前 Controller 封装的 logger 对象
 */
const path = require('path')
const Controller = require('egg').Controller

class HomeController extends Controller {
    async app() {
        /** 
         * 框架内置基础对象，包括 Application，Context，Request，Response
         * 
         * Application：全局应用对象，应用的每个进程只会实例化一个Application实例
         *              [获取]: this.ctx.app; 在继承自 Controller、Service 基类的实例中，可以通过 this.app 访问到 Application 对象
         * 
         * Context:     请求级别的对象，在每次收到用户请求时，框架都会实例化一个 Context 对象，封装了这次用户请求的信息，并提供了许多便捷的方法来获取请求参数或者设置响应信息
         *              [获取]: this.ctx（ctx 为 Context 的实例）,  获取 Context 实例的最常见方式是在 [Middleware]、[Controller] 以及 [Service] 中
         * 
         * Request & Response
         * Request 是一个请求级别的对象，封装了 Node.js 原生的 HTTP Request 对象，提供了一系列辅助方法获取 HTTP 请求常用参数
         * Response 是一个请求级别的对象，封装了 Node.js 原生的 HTTP Response 对象，提供了一系列辅助方法设置 HTTP 响应
         * [获取]: 可以在 Context 的实例上获取到当前请求的 Request(ctx.request) 和 Response(ctx.response) 实例
         * 
         * *获取请求body的方式：ctx.request.body，而不是 ctx.body
         * 
         */
    }
    async index() {
        console.log(Object.keys(this.app))
        const { ctx } = this
        console.log(Object.keys(ctx.request.headers))
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
