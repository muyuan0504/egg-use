/** 请求路由映射 - 用于配置 URL 路由规则 */

module.exports = (app) => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/render', controller.home.render)
    router.get('/news', controller.news.list)
}
