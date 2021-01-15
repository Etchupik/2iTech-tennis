import { gameController } from "./controllers/GameController.js";
import { playerController } from "./controllers/PlayerController.js";

//création manuelle d'un routeur
//nous plaçons toutes nos routes dans une fonction
export const setRouting = (server) => {
    server.get('/players', playerController.findAll);
    server.post('/players', playerController.save)
    server.get('/players/:id', playerController.findById)
    server.delete('/players/:id', playerController.deleteById)
    server.put('/players/:id', playerController.updateById)

    server.get('/game', gameController.findAll);
    server.post('/game', gameController.save)
    server.get('/game/:id', gameController.findById)
    server.delete('/game/:id', gameController.deleteById)
    server.put('/game/:id', gameController.updateById)

    server.get('/newGame', gameController.newGame);
}