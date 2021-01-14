import { userRepository } from "../repositories/UserRepository.js";

class UserService {

    /**
     * Methode pour recuperer tous les utilisateurs
     */
    findAll(){
        return userRepository.findAll();
    }

    /**
     * Methode qui permet de recuperer un utilisateur avec un id
     * 
     * @param {string} id 
     */
    findById(id){
        return userRepository.findById(id)
    }

    /**
     * Methode pour creer un nouvel utilisateur
     * 
     * @param user
     */
    save(user){
        return userRepository.save(user);
    }

    /**
     * Methode pour supprimer un utilisateur avec id
     * 
     * @param {string} id 
     */
    deleteById(id){
        return userRepository.deleteById(id)
    }

    /**
     * Methode pour mettre a jour un utilisateur avec id
     * 
     * @param {Object} user 
     */
    updateById(user){
        return userRepository.updateById(user)
    }
}

export const userService = Object.freeze(new UserService())