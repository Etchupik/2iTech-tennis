import { playerService } from "../services/PlayerService.js";

class PlayerController{

    findAll(req, res) {
        playerService.findAll().then((data) => {
            res.json(data)
        })
    }

    findById(req, res) {
        const id = req.params.id;
        playerService.findById(id).then((data) => {
            res.json(data)
        })
    }

    save(req, res) {
        playerService.save(req.body).then(data =>{
            res.json(data)
        })
    }

    deleteById(req, res){
        const id = req.params.id;
        playerService.deleteById(id).then((data) => {
            res.json(data)
        })
    }

    updateById(req, res){
        playerService.updateById(req).then((data) => {
            res.json(data)
        })
    }
}

export const playerController = Object.freeze(new PlayerController())