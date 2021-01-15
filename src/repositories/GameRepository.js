import { gameModel } from '../models/GameModel.js';

class GameRepository {

    findAll(){
        return gameModel.find().exec();
    }

    findById(id){
        return gameModel.findById(id).exec();
    }

    save(game){
        return new gameModel(game).save();
    }

    deleteById(id){
        return gameModel.findByIdAndDelete(id).exec();
    }

    updateById(game){
        return gameModel.findByIdAndUpdate(
            game.id, 
            game.body,
            gameModel.findById(game.id).exec()).exec();
    }

}

export const gameRepository = Object.freeze(new GameRepository());