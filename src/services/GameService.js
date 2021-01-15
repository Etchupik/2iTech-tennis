import { gameRepository } from "../repositories/GameRepository.js";
import { Game } from "../class/Game.js";
import { Player } from "../class/Player.js";

class GameService {

    newGame(request){
        const player1 = new Player(request.body.player1Name);
        const player2 = new Player(request.body.player2Name);
        const game = new Game(player1, player2);
        const gameToSave = this.formatGameToSave(game);

        return this.save(gameToSave)
    }

    formatGameToSave(game){
        const gameToSave = {
        "player1Name": game.player1.name,
        "player2Name": game.player2.name
        }

        return gameToSave;
    }

    findAll(){
        return gameRepository.findAll();
    }

    findById(id){
        return gameRepository.findById(id)
    }

    save(game){
        return gameRepository.save(game);
    }

    deleteById(id){
        return gameRepository.deleteById(id)
    }

    updateById(request){
        const game = {
            "id": request.params.id,
            "body": request.body
        }
        return gameRepository.updateById(game)
    }
}

export const gameService = Object.freeze(new GameService())