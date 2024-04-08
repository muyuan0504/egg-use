/**
 * 基于 MVC 架构模式，Service 层是业务逻辑的实现者，处理来自 Controller 的请求，执行相应的业务逻辑，包括数据处理、持久化、计算等。
 * Service 应该是高内聚的，尽量只包含与业务逻辑相关的代码，保持独立性和可复用性。
 *
 * <它不应直接处理 HTTP 请求，而应该专注于业务逻辑的实现>
 */

const Service = require('egg').Service

class HomeService extends Service {
    async index(page = 1) {
        // read config
        const { serverUrl, pageSize } = this.config.news

        // use build-in http client to GET hacker-news api
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            data: {
                orderBy: '"$key"',
                startAt: `"${pageSize * (page - 1)}"`,
                endAt: `"${pageSize * page - 1}"`,
            },
            dataType: 'json',
        })

        // parallel GET detail
        const newsList = await Promise.all(
            Object.keys(idList).map((key) => {
                const url = `${serverUrl}/item/${idList[key]}.json`
                return this.ctx.curl(url, { dataType: 'json' })
            })
        )
        return newsList.map((res) => res.data)
    }
}

module.exports = HomeService
