import _ from "lodash";

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
        const fieldsNames = Object.keys(game);

        _.forEach(fieldsNames, (xx) => {
            let field = game[xx];

            if(typeof(field) == "object"){
                _.forEach(field, (xx) => {
                    field = this.fillEmptyValue(xx)
                })
            }
            else{
                game[field] = this.fillEmptyValue(field);
            }
        })

        return game;
    }

    fillEmptyValue(field){
        const type = typeof(field);

        if(field == null)
            field = "";
        if(type == "string" && this.fieldEmpty(field))
            field = "";
        if(type == "Number" && this.fieldEmpty(field))
            field = 0;

        return field;
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