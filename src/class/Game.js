export class Game{

    _player1;
    _player2;
    _score;

    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.score = "";
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
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
}