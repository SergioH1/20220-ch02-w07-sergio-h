import { Router } from 'express';

import {
    addController,
    getController,
    getIdController,
} from '../controller/controller.js';

export const dataRouter = Router();

dataRouter.get('/', getController);
dataRouter.get('/:id', getIdController);
dataRouter.get('/', addController);
