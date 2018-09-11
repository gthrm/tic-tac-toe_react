import mongoose from 'mongoose';

const bul = false;

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    games: {type: Boolean, required: bul, default: true},
    createdAt: {type: Date}
});

mongoose.model('Game', GameSchema);