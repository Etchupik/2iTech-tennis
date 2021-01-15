import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	playerName: String,
	playerPoints: Number,
});

export const playerModel = mongoose.model('Player', playerSchema);