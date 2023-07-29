const { Router } = require('express');

const bookingController = require('../controllers/Booking');

const bookingRouter = Router();

bookingRouter.get('/', bookingController.getbookings);

bookingRouter.post('/', bookingController.postbooking);

module.exports = bookingRouter;