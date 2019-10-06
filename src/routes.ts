import express from 'express';
import multer from 'multer';
import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';
import uploadConfig from './config/upload';
import DashboardController from './controllers/DashboardController';
import BookingController from './controllers/BookingController';

const routes = express.Router();
const upload = multer(uploadConfig);

// get, post, put, delete

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

export default routes;
