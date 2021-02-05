import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    _player1Name: String,
    _player2Name: String,
    _player1Points: Number,
    _player2Points: Number,
    _player1Jeu: Number,
    _player2Jeu: Number,
    _player1Set: Number,
    _player2Set: Number,
	_winner: String 
});

export const gameModel = mongoose.model('Game', gameSchema);