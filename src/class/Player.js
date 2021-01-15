export class Player{

    _name;
    _points;
    
    constructor(name){
        this.name = name;
        this.points = 0;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get points() {
        return this._points;
    }
    set points(value) {
        this._points = value;
    }
}