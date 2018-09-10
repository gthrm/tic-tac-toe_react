import mongoose from 'mongoose';

const bul = true;

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    games: {type: Boolean, required: bul},
    createdAt: {type: Date}
});

mongoose.model('Game', GameSchema);