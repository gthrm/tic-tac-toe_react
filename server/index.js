import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { serverPort } from '../src/config/config.json'

import * as db from './utils/dataBaseUtils'

const app = express()

db.setUpConnection()

app.use(bodyParser.json())

app.use(cors({ origin: '*' }));

app.get('/games', (req, res) => {
    db.allGames().then(data => res.send(data))
})

app.get('/wingames', (req, res) => {
    db.winGames().then(data => res.send(data))
})

app.post('/game', (req, res) => {
    db.createDataAll(req.body).then(data => res.send(data))
})

app.post('/wingame', (req, res) => {
    db.createDataWin(req).then(data => res.send(data)) //params.id, req.body
})

const sever = app.listen(serverPort, () => {
    console.log(`Server on port ${serverPort}`)
})