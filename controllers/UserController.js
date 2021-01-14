import { userService } from "../services/UserService.js";

class UserController{

    /**
     * Methode pour recuperer tous les utilisateurs
     * 
     * @param {any} req 
     * @param {any} res 
     */
    findAll(req, res) {
        const data = userService.findAll().then((data) => {
            res.json(data)
        })
    }

    /**
     * Methode pour recuperer un utilisateur avec id
     * 
     * @param {any} req 
     * @param {any} res 
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
     * @param {any} req 
     * @param {any} res 
     */
    save(req, res) {
        userService.save(req.body).then(data =>{
            res.json(data)
        })
    }

    /**
     * Methode qui supprime un utilisateur avec id
     * 
     * @param {any} req 
     * @param {any} res 
     */
    deleteById(req, res){
        const id = req.params.id;
        userService.deleteById(id).then((data) => {
            res.json(data)
        })
    }

    /**
     * Methode pour mettre a jour un utilisateur avec id
     * 
     * @param {any} req 
     * @param {any} res 
     */
    updateById(req, res){
        const id = req.params.id;
        userService.updateById(id).then((data) => {
            res.json(data)
        })
    }
}

export const userController = Object.freeze(new UserController())