// import mongoose from 'mongoose';

// const bul = false;

// const Schema = mongoose.Schema;

// const WinGameSchema = new Schema({
//     winGames: {type: Boolean, required: bul, default: true},
//     createdAt: {type: Date}
// });

// mongoose.model('WinGame', WinGameSchema);

'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bul = false;

var Schema = _mongoose2.default.Schema;

var WinGameSchema = new Schema({
    winGames: { type: Boolean, required: bul, default: true },
    createdAt: { type: Date }
});

_mongoose2.default.model('WinGame', WinGameSchema);