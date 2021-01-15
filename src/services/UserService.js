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

    updateById(user){
        user = {
            "id": user.params.id,
            "userName": user.body.userName,
            "userPoints": user.body.userPoints
        }
        return userRepository.updateById(user)
    }
}

export const userService = Object.freeze(new UserService())