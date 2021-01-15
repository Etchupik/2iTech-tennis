import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    player1Name: String,
    player2Name: String,
    player1Points: Number,
    player2Points: Number,
    player1Jeu: Number,
    player2Jeu: Number,
    player1Set: Number,
    player2Set: Number,
	winner: Boolean 
});

export const gameModel = mongoose.model('Game', gameSchema);