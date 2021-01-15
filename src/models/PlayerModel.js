import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	playerName: String,
	playerPoints: Number,
	playerJeu: Number,
	playerSet: Number,
	playerWinner: Boolean 
});

export const playerModel = mongoose.model('Player', playerSchema);