import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	name: String
});

export const playerModel = mongoose.model('Player', playerSchema);