import { userRepository } from "../repositories/UserRepository.js";

class UserService {

    findAll(){
        return userRepository.findAll();
    }

    findById(id){
        return userRepository.findById(id)
    }

    save(user){
        return userRepository.save(user);
    }

    deleteById(id){
        return userRepository.deleteById(id)
    }

    updateById(requete){
        const user = {
            "id": requete.params.id,
            "body": requete.body
        }
        return userRepository.updateById(user)
    }
}

export const userService = Object.freeze(new UserService())