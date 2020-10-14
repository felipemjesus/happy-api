import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Happy API' }));

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;
