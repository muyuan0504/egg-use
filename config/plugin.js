/** 
 * config/plugin.js 用于配置需要加载的插件
 * 
 * egg-static 内置插件是默认开启的，不需要手动配置
 */

/**  Nunjucks 渲染模板 */
exports.nunjucks = {
    enable: true, // 开启插件
    package: 'egg-view-nunjucks',
}

/** 使用 assets 模板引擎 - 提供了通用的静态资源管理和本地开发方案 */
// exports.assets = {
//     enable: true,
//     package: 'egg-view-assets',
// }
