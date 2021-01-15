import { userModel } from '../models/UserModel.js';

class UserRepository {

    findAll(){
        return userModel.find().exec();
    }

    findById(id){
        return userModel.findById(id).exec();
    }

    save(user){
        return new userModel(user).save();
    }

    deleteById(id){
        return userModel.findByIdAndDelete(id).exec();
    }

    updateById(user){
        return userModel.findByIdAndUpdate(
            user.id, 
            { "userName": user.userName,
              "userPoints": user.userPoints
            }, 
            userModel.findById(user.id).exec()).exec();
    }

}

export const userRepository = Object.freeze(new UserRepository());