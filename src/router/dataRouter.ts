import { Router } from 'express';

import { getController, getIdController } from '../controller/controller.js';

export const dataRouter = Router();

dataRouter.get('/', getController);
dataRouter.get('/:id', getIdController);
