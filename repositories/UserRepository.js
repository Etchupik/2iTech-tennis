import { userModel } from '../models/userModel.js';

class UserRepository {

    /**
     * Methode pour recuperer tous les utilisateurs
     */
    findAll(){
        return userModel.find().exec();
    }

    /**
     * Methode qui permet de recuperer un utilisateur avec id
     * 
     * @param {string} id 
     */
    findById(id){
        return userModel.findById(id).exec();
    }

    /**
     * Methode pour sauvegarder un nouvel utilisateur
     * 
     * @param user 
     */
    save(user){
        return new userModel(user).save();
    }

    /**
     * Methode pour supprimer un utilisateur avec id
     * 
     * @param {string} id 
     */
    deleteById(id){
        return userModel.findByIdAndDelete(id).exec();
    }

    /**
     * Methode pour mettre a jour un utilisateur avec id
     * 
     * @param {Object} user 
     */
    updateById(user){
        return userModel.findByIdAndUpdate(user.id, { "userName": user.userName}).exec();
    }

}

export const userRepository = Object.freeze(new UserRepository());