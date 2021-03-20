const express = require('express')
const app = express()
const port = 3000

//导入子路由
const routes = require('./routes')
routes(app)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.post('/', function (req, res) {
  console.log('收到请求，请求体为：', req.body)
  res.status(201).send({ id: 2, ...req.body })
})

app.put('/:id', (req, res) => {
  console.log('收到请求参数为：', req.params.id)
  console.log('收到的请求体，内容为：', req.body)
  res.send({ id: req.params.id, ...req.body })
})

app.delete('/:id', (req, res) => {
  console.log('收到delete请求参数为：', req.params.id)
  res.status(204).send()
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
