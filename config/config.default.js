/**
 * EGGJS 配置文件，可以自动合并应用、插件、框架的配置，按顺序覆盖，且可以根据环境维护不同的配置
 * 合并后的配置可直接从 app.config 获取
 * 
 * 支持按环境变量加载不同的配置文件，例如 config.local.js、config.prod.js 等
 *
 * 框架在启动时会把合并后的最终配置输出到 run/application_config.json（worker 进程）和 run/agent_config.json（agent 进程）中，以供问题分析
 */

// cookie 安全字符串
exports.keys = 'cookie was written by aiden'

exports.mockConfig = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

// 基于egg-view-nunjucks插件，添加 view 配置项
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
}

/** 添加中间件配置 */
exports.middleware = ['robot']

exports.robot = {
    ua: [/Baiduspider/i],
}
