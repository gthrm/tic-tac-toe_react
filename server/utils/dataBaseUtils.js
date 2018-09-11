import mongoose from 'mongoose';

import config from '../../src/config/config.json';

import '../models/Game.js';
import '../models/WinGame.js';

const Game = mongoose.model('Game');
const WinGame = mongoose.model('WinGame');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.username}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`)
};

export function allGames() {
    return Game.find();
};

export function winGames() {

    return WinGame.find();
};

export function createDataAll(data) {
    const game = new Game({
        games: data.games,
        createdAt: new Date()
    });
    console.log('Game');
    return game.save();
};

export function createDataWin(data) {
    const wingame = new WinGame({
        winGames: data.winGames,
        createdAt: new Date()
    });
    console.log('WinGame');
    return wingame.save();
};