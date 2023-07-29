const bookingService = require('../services/Booking');


module.exports.getbookings = async (req, res) => {
    try {
      const bookings = await bookingService.findAllbookings();
      return res.send({ bookings });
    } catch (err) {
      // this denotes a server error, therefore status code should be 500.
      res.status(500);
      return res.send({
        error: err.message
      });
    }
  };

module.exports.postbooking = async (req, res) => {
    const bookingInfo = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nationalId: req.body.nationalId,
        job: req.body.job,
        nofdays: req.body.nofdays,
        carId: req.body.carId
    };
    try {
        console.log('Recived bookingInfo:',  bookingInfo);
        const createdbooking = await bookingService.bookcar(bookingInfo);
        return res.status(201).send({
            msg: 'booking confirmed successfully.',
            bookingId: createdbooking._id
        });
    } catch (err) {
        console.error('Error Creating Booking:', err);
        return res.status(500).send({
            error: err.message
        });
    }
};