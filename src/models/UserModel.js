import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
	userName: String,
	userPoints: String,
	userJeu: String,
	userSet: String,
	userVainqueur: Boolean 
});

export const userModel = mongoose.model('Game', gameSchema);