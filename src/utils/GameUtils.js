class GameUtils {
    
    formatGameToSave(game){
        const p1Name = this.fieldEmpty(game.player1.name) ? "Player 1" : game.player1.name;
        const p2Name = this.fieldEmpty(game.player2.name) ? "Player 2" : game.player2.name;
        const p1Jeu = this.fieldEmpty(game.player1.jeu) ? 0 : game.player1.jeu;
        const p2Jeu = this.fieldEmpty(game.player2.jeu) ? 0 : game.player2.jeu;
        const p1Set = this.fieldEmpty(game.player1.set) ? 0 : game.player1.set;
        const p2Set = this.fieldEmpty(game.player2.set) ? 0 : game.player2.set;

        const gameToSave = {
            "player1Name": p1Name,
            "player2Name": p2Name,
            "player1Jeu": p1Jeu,
            "player2Jeu": p2Jeu,
            "player1Set": p1Set,
            "player2Set": p2Set
        }

        return gameToSave;
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