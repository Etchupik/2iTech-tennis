class GameUtils {
    
    formatGame(gameToFormat){

        let game = this.fillGameValue(gameToFormat);
        
        const gameToSave = {
            "player1Name": game.player1.name,
            "player2Name": game.player2.name,
            "player1Jeu": game.player1Jeu,
            "player2Jeu": game.player2Jeu,
            "player1Set": game.player1Set,
            "player2Set": game.player2Set
        }

        return gameToSave;
    }

    fillGameValue(game){
        const keys = Object.keys(game)
        const values = Object.values(game);

        for(let i = 0; i < keys.length; i++){
            if(typeof(values[i]) == "object"){
                game[keys[i]] = this.fillObject(values[i])
            }
            else{
                game[keys[i]] = this.fillEmptyValue(values[i])
            }
        }

        return game;
    }

    fillObject(object){
        const keys = Object.keys(object);
        const values = Object.values(object);

        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let value = values[i];
            let type = typeof(object[key]);

            object[key] = this.fillEmptyValue(type, value);
        }

        return object;
    }

    fillEmptyValue(type, value){

        if(type == "string" && this.fieldEmpty(value))
            value = "";
        else if(type == "Number" && this.fieldEmpty(value))
            value = 0;

        return value;
    }

    
    fieldEmpty(field){
        let isEmpty = false;

        if(field == null || field == ""){
            isEmpty = true;
        }

        return isEmpty;
    }
}

export const gameUtils = Object.freeze(new GameUtils())