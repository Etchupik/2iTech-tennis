import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	Name: String,
	Points: Number,
	Jeu: Number,
	Set: Number
});

export const playerModel = mongoose.model('Player', playerSchema);