import { gameRepository } from "../repositories/GameRepository.js";

class GameService {

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

    updateById(requete){
        const game = {
            "id": requete.params.id,
            "body": requete.body
        }
        return gameRepository.updateById(game)
    }
}

export const gameService = Object.freeze(new GameService())