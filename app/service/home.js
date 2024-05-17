/**
 * 基于 MVC 架构模式，Service 层是业务逻辑的实现者, 即用于编写业务的逻辑层，处理来自 Controller 的请求，执行相应的业务逻辑，包括数据处理、持久化、计算等。
 * Service 应该是高内聚的，尽量只包含与业务逻辑相关的代码，保持独立性和可复用性。
 *
 * service下定义的 Class 名称不影响 controller 中的调用
 * 即当service中存在 app\service\home.js, homejs中 module.exports 的class名称可随意定义，不影响controller通过 ctx.service.index 调用，因为EGGjs初始化时通过目录名约定做了绑定处理
 *
 * app/service/** 用于编写业务逻辑层，建议使用
 * 
 * <它不应直接处理 HTTP 请求，而应该专注于业务逻辑的实现>
 */

const Service = require('egg').Service

/** 这里类名改为 HomesService 不影响 controller 调用，但是目录文件名必须要保持一致，即 home.js -> ctx.service.home */
class HomeService extends Service {
    index() {
        return 'home request reponse'
    }
}

module.exports = HomeService
