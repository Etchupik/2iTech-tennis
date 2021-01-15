export class Game{

    _player1;
    _player2;
    _player1Points;
    
    _player2Points;
    
    _player1Jeu;
    
    _player2Jeu;
    
    _player1Set;
    
    _player2Set;
    
    _winner;
    

    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.player1Points = 0,
        this.player2Points = 0,
        this.player1Jeu = 0,
        this.player2Jeu = 0,
        this.player1Set = 0,
        this.player2Set = 0,
	    this.winner = ""
    }

    get player1() {
        return this._player1;
    }
    set player1(value) {
        this._player1 = value;
    }

    get player2() {
        return this._player2;
    }
    set player2(value) {
        this._player2 = value;
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