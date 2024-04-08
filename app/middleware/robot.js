/**
 * EGGJS 中间件配置
 * 当用户UA命中 options.ua 时，返回 'Go away, robot. '
 *
 * windows 执行 curl 使用 cmd 兼容性更好，用 powerShell 会有奇奇怪怪的异常
 * curl http://127.0.0.1:7001/news -A "Baiduspider"
 */

module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
        const source = ctx.get('user-agent') || ''
        const match = options.ua.some((ua) => ua.test(source))
        if (match) {
            ctx.status = 403
            ctx.message = 'Go away, robot.'
        } else {
            await next()
        }
    }
}
