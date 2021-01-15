import { playerModel } from '../models/PlayerModel.js';

class PlayerRepository {

    findAll(){
        return playerModel.find().exec();
    }

    findById(id){
        return playerModel.findById(id).exec();
    }

    save(player){
        return new playerModel(player).save();
    }

    deleteById(id){
        return playerModel.findByIdAndDelete(id).exec();
    }

    updateById(player){
        return playerModel.findByIdAndUpdate(
            player.id, 
            player.body,
            playerModel.findById(player.id).exec()).exec();
    }

}

export const playerRepository = Object.freeze(new PlayerRepository());