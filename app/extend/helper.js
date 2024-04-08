/**
 * extend 的 EGGjs 的扩展配置，只需在 app/extend 目录下提供扩展脚本即可
 */

const moment = require('moment')

exports.relativeTime = (time) => moment(new Date(time * 1000)).fromNow()
