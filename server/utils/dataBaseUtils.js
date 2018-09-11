// import mongoose from 'mongoose';

// import config from '../../src/config/config.json';

// import '../models/Game.js';
// import '../models/WinGame.js';

// const Game = mongoose.model('Game');
// const WinGame = mongoose.model('WinGame');

// export function setUpConnection() {
//     mongoose.connect(`mongodb://${config.db.username}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`)
// };

// export function allGames() {
//     return Game.find();
// };

// export function winGames() {

//     return WinGame.find();
// };

// export function createDataAll(data) {
//     const game = new Game({
//         games: data.games,
//         createdAt: new Date()
//     });
//     console.log('Game');
//     return game.save();
// };

// export function createDataWin(data) {
//     const wingame = new WinGame({
//         winGames: data.winGames,
//         createdAt: new Date()
//     });
//     console.log('WinGame');
//     return wingame.save();
// };

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.allGames = allGames;
exports.winGames = winGames;
exports.createDataAll = createDataAll;
exports.createDataWin = createDataWin;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../../src/config/config.json');

var _config2 = _interopRequireDefault(_config);

require('../models/Game.js');

require('../models/WinGame.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = _mongoose2.default.model('Game');
var WinGame = _mongoose2.default.model('WinGame');

function setUpConnection() {
    _mongoose2.default.connect('mongodb://' + _config2.default.db.username + ':' + _config2.default.db.pass + '@' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name);
};

function allGames() {
    return Game.find();
};

function winGames() {

    return WinGame.find();
};

function createDataAll(data) {
    var game = new Game({
        games: data.games,
        createdAt: new Date()
    });
    console.log('Game');
    return game.save();
};

function createDataWin(data) {
    var wingame = new WinGame({
        winGames: data.winGames,
        createdAt: new Date()
    });
    console.log('WinGame');
    return wingame.save();
};