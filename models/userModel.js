import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
	userScore: Number,
    userName: String,
});
export const userModel = mongoose.model('Game', gameSchema);