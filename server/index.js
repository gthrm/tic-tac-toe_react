// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'

// import { serverPort } from '../src/config/config.json'

// import * as db from './utils/dataBaseUtils'

// const app = express()

// db.setUpConnection()

// app.use(bodyParser.json())

// app.use(cors({ origin: '*' }));

// app.get('/games', (req, res) => {
//     db.allGames().then(data => res.send(data))
// })

// app.get('/wingames', (req, res) => {
//     db.winGames().then(data => res.send(data))
// })

// app.post('/game', (req, res) => {
//     db.createDataAll(req.body).then(data => res.send(data))
// })

// app.post('/wingame', (req, res) => {
//     db.createDataWin(req).then(data => res.send(data)) //params.id, req.body
// })

// const sever = app.listen(serverPort, () => {
//     console.log(`Server on port ${serverPort}`)
// })

'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../src/config/config.json');

var _dataBaseUtils = require('./utils/dataBaseUtils');

var db = _interopRequireWildcard(_dataBaseUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

db.setUpConnection();

app.use(_bodyParser2.default.json());

app.use((0, _cors2.default)({ origin: '*' }));

app.get('/games', function (req, res) {
    db.allGames().then(function (data) {
        return res.send(data);
    });
});

app.get('/wingames', function (req, res) {
    db.winGames().then(function (data) {
        return res.send(data);
    });
});

app.post('/game', function (req, res) {
    db.createDataAll(req.body).then(function (data) {
        return res.send(data);
    });
});

app.post('/wingame', function (req, res) {
    db.createDataWin(req).then(function (data) {
        return res.send(data);
    }); //params.id, req.body
});

var sever = app.listen(_config.serverPort, function () {
    console.log('Server on port ' + _config.serverPort);
});