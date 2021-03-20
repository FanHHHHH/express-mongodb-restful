const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
  res.send({ id: 1, title: 'demo' })
})

route.post('/', (req, res) => {
  console.log('保存文章', req.body)
  res.status(201).send({ id: 2, ...req.body })
})

route.put('/:id', (req, res) => {
  console.log('收到请求参数，文章ID为：', req.params.id)
  console.log('收到的请求体，内容为：', req.body)
  res.send({ id: req.params.id, ...req.body })
})

route.delete('/:id', (req, res) => {
  console.log('收到delete请求参数为：', req.params.id)
  res.status(204).send()
})

// 导出子路由变量
module.exports = route
