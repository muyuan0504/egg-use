/**
 * EGGJS 配置文件，可以自动合并应用、插件、框架的配置，按顺序覆盖，且可以根据环境维护不同的配置
 * 合并后的配置可直接从 app.config 获取
 *
 * 支持按环境变量加载不同的配置文件，例如 config.local.js、config.prod.js 等
 *
 * 框架在启动时会把合并后的最终配置输出到 run/application_config.json（worker 进程）和 run/agent_config.json（agent 进程）中，以供问题分析
 */

const path = require('path')

// cookie 安全字符串
exports.keys = 'cookie was written by aiden'

exports.mockConfig = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

/**
 * 模板配置项 view
 * egg-view-nunjucks插件，用于提供【服务端模板渲染】能力
 * 使用assets 模板引擎 插入 .js
 */
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
        // '.html': 'nunjucks',
        '.js': 'assets',
    },
}

/** 添加中间件配置 */
exports.middleware = ['robot']

exports.robot = {
    ua: [/Baiduspider/i],
}
