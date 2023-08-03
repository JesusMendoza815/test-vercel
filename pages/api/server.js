import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routerUser from './routers/user.router.js'

const server = express()

// Middlewares
server.use(bodyParser.json())
server.use(cors())

// Routers
server.get('/', (req, res) => res.json('Yali´s server OK!'))
server.use('/signup', routerUser)

export { server }
