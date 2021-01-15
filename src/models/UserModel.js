import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
	userName: String,
	userPoints: String
});

export const userModel = mongoose.model('Game', gameSchema);