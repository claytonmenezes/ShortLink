import express from 'express'
import db from './src/db.js'
import routes from './src/routes.js'

const app = express()
app.use(express.json())
app.use(routes)

const start = async () => {
  await db.sequelize.sync()
  app.listen(41000, () => {
    console.log('Servidor rodando na porta', 41000)
  })
}

start()