import { userController } from "./controllers/UserController";

//création manuelle d'un routeur
//nous plaçons toutes nos routes dans une fonction
export const setRouting = (server) => {
    server.get('/users', userController.findAll);
    server.post('/users', userController.save)
    server.get('/users/:id', userController.findById)
    server.delete('/users/:id', userController.deleteById)
    server.put('/users/:id',userController.updateById)
}