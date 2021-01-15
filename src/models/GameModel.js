import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    player1Name: String,
    player2Name: String,
    player1Points: Number,
    player2Points: Number
});

export const gameModel = mongoose.model('Game', gameSchema);