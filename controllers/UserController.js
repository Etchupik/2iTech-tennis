import { userService } from "../services/UserService";

class UserController{

    /**
     * Methode pour recuperer tous les utilisateurs
     */
    findAll(req, res) {
        const data = userService.findAll().then((data) => {
            res.json(data)
        })
    }

    /**
     * Methode pour recuperer un utilisateur avec id
     * 
     * @param req 
     * @param res 
     */
    findById(req, res) {
        const id = req.params.id;
        userService.findById(id).then((data) => {
            res.json(data)
        })
    }

    /**
     * Methode pour sauvegarder un nouvel utilisateur
     * 
     * @param req 
     * @param res 
     */
    save(req, res) {
        userService.save(req.body).then(data =>{
            res.json(data)
        })
    }

    /**
     * Methode qui supprime un utilisateur avec id
     * 
     * @param req 
     * @param res 
     */
    deleteById(req, res){
        const id = req.params.id;
        userService.deleteById(id).then((data) => {
            res.json(data)
        })
    }
}

export const userController = Object.freeze(new UserController())