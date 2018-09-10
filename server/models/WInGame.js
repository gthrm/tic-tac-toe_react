import mongoose from 'mongoose';

const bul = false;

const Schema = mongoose.Schema;

const WinGameSchema = new Schema({
    winGames: {type: Boolean, required: bul, default: true},
    createdAt: {type: Date}
});

mongoose.model('WinGame', WinGameSchema);