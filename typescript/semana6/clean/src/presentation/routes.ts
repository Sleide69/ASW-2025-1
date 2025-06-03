import { Router } from '../../../../../practica_3/node_modules/@types/express';

import { TodoRoutes } from './todos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );
    



    return router;
  }


}

