export class GameToSave {

    _player1Name;
    _player2Name;
    _player1Points;
    _player2Points;
    _player1Jeu;
    _player2Jeu;
    _player1Set;
    _player2Set;
    _winner;
    

    constructor(game){
        this.player1Name = game.player1.name,
        this.player2Name = game.player2.name,
        this.player1Points = game.player1Points,
        this.player2Points = game.player2Points,
        this.player1Jeu = game.player1Jeu,
        this.player2Jeu = game.player2Jeu,
        this.player1Set = game.player1Set,
        this.player2Set = game.player2Set,
        this.winner = game.winner 
    }

    get player1Name() {
        return this._player1Name;
    }
    set player1Name(value) {
        this._player1Name = value;
    }

    get player2Name() {
        return this._player2Name;
    }
    set player2Name(value) {
        this._player2Name = value;
    }

    get player1Points() {
        return this._player1Points;
    }
    set player1Points(value) {
        this._player1Points = value;
    }

    get player2Points() {
        return this._player2Points;
    }
    set player2Points(value) {
        this._player2Points = value;
    }

    get player1Jeu() {
        return this._player1Jeu;
    }
    set player1Jeu(value) {
        this._player1Jeu = value;
    }

    get player2Jeu() {
        return this._player2Jeu;
    }
    set player2Jeu(value) {
        this._player2Jeu = value;
    }

    get player1Set() {
        return this._player1Set;
    }
    set player1Set(value) {
        this._player1Set = value;
    }

    get player2Set() {
        return this._player2Set;
    }
    set player2Set(value) {
        this._player2Set = value;
    }

    get winner() {
        return this._winner;
    }
    set winner(value) {
        this._winner = value;
    }
    
}