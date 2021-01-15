import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    player1Name: String,
    player2Name: String,
	playerWinner: Boolean 
});

export const gameModel = mongoose.model('Game', gameSchema);