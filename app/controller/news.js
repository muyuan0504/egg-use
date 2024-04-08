const Controller = require('egg').Controller

class NewsController extends Controller {
    async list() {
        const { ctx } = this
        // const dataList = {
        //     list: [
        //         { id: 1, title: 'This is news 1', url: '/news/1' },
        //         { id: 2, title: 'This is news 2', url: '/news/2' },
        //     ],
        // }
        // await this.ctx.render('/home.tpl', dataList)

        const page = ctx.query.page || 1
        const newsList = await ctx.service.news.list(page)
        await ctx.render('./home.tpl', { list: newsList })
    }
}

module.exports = NewsController
