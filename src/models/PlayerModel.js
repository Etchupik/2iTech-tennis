import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	name: String,
	points: Number,
});

export const playerModel = mongoose.model('Player', playerSchema);