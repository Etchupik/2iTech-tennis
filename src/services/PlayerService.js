import { playerRepository } from "../repositories/PlayerRepository.js";

class PlayerService {

    findAll(){
        return playerRepository.findAll();
    }

    findById(id){
        return playerRepository.findById(id)
    }

    save(player){
        return playerRepository.save(player);
    }

    deleteById(id){
        return playerRepository.deleteById(id)
    }

    updateById(requete){
        const player = {
            "id": requete.params.id,
            "body": requete.body
        }
        return playerRepository.updateById(player)
    }
}

export const playerService = Object.freeze(new PlayerService())