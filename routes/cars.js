// import Express Router from express
const { Router } = require('express');

// import our carsController
const carsController = require('../controllers/cars');
const authMiddlewares = require('../middelwares/authorization');

// create an instance of Express Router.
const carsRouter = Router();

// whenever we receive a GET request on cars route '/',
// we will invoke the getcars method in the cars controller.
carsRouter.get('/', carsController.getcars);

// whenever we receive a POST request on cars route '/',
// we will invoke the postcar method in the cars controller.
carsRouter.post('/', carsController.postcar);

// whenever we receive a GET request on cars DYNAMIC route '/:carId',
// we will invoke the getcar method in the cars controller that extracts the carId
carsRouter.get('/:carId', carsController.getcar);

carsRouter.delete('/:carId', carsController.deletecar);

// export the router instance we created.
module.exports = carsRouter;
