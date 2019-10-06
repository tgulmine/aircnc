import express from 'express';
import SessionController from './controllers/SessionController';

const routes = express.Router();

// get, post, put, delete

routes.post('/sessions', SessionController.store);

export default routes;
