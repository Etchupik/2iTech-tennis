import { userService } from "../services/UserService.js";

class UserController{

    findAll(req, res) {
        const data = userService.findAll().then((data) => {
            res.json(data)
        })
    }

    findById(req, res) {
        const id = req.params.id;
        userService.findById(id).then((data) => {
            res.json(data)
        })
    }

    save(req, res) {
        userService.save(req.body).then(data =>{
            res.json(data)
        })
    }

    deleteById(req, res){
        const id = req.params.id;
        userService.deleteById(id).then((data) => {
            res.json(data)
        })
    }

    updateById(req, res){
        userService.updateById(req).then((data) => {
            res.json(data)
        })
    }
}

export const userController = Object.freeze(new UserController())