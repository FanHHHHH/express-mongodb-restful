//导入子路由
const post = require('./post')
module.exports = (app) => {
  // 挂载子路由
  app.use('/post', post)
}
