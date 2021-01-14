import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
	userName: String
});

export const userModel = mongoose.model('Game', gameSchema);