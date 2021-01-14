  
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
	userScore: Number,
    userName: String,
});

module.exports = mongoose.model('Game', gameSchema);