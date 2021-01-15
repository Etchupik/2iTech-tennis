import { Game } from "../class/Game.js";
import { Player } from "../class/Player.js";
import { gameService } from "../services/GameService.js";

class GameController{

    initGame(){
        const player1 = new Player("Steve");
        const player2 = new Player("Roger");
        const game = new Game(player1, player2, "");

        console.log(game);
    }

    findAll(req, res) {
        gameService.findAll().then((data) => {
            res.json(data)
        })
    }

    findById(req, res) {
        const id = req.params.id;
        gameService.findById(id).then((data) => {
            res.json(data)
        })
    }

    save(req, res) {
        gameService.save(req.body).then(data =>{
            res.json(data)
        })
    }

    deleteById(req, res){
        const id = req.params.id;
        gameService.deleteById(id).then((data) => {
            res.json(data)
        })
    }

    updateById(req, res){
        gameService.updateById(req).then((data) => {
            res.json(data)
        })
    }
}

export const gameController = Object.freeze(new GameController())