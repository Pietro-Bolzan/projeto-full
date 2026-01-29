import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/users', async (req, res) => {

  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(user)
})

app.get('/users', async (req, res) => {

  let users = []

  users = await prisma.user.findMany({
    where: {
      name: req.query.name,
      email: req.query.email,
      age: req.query.age,
      ativo: true
    }
  })
  res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => {

  console.log(req)

  await prisma.user.update({
    where: {
      id: req.params.id
    },

    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => {

  await prisma.user.update({
    where: {
      id: req.params.id
    },

    data: {
      ativo: false
    }
  })

  res.status(200).json({ message: 'Usuário deletado com sucesso' })
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});
