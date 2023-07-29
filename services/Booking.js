const { ObjectId } = require('mongoose').Types;

const bookingModel = require('../models/Booking');

module.exports.findAllbookings = async () => {
    try {
      const bookings = await bookingModel.find();
      return bookings;
    } catch (err) {
      throw new Error('Could not retrieve bookings.');
    }
  };
  
module.exports.bookcar = async (bookingInfo) => {
    try {
        const booking = new bookingModel({
        firstname: bookingInfo.firstname,
        lastname: bookingInfo.lastname,
        nationalId:bookingInfo.nationalId,
        job: bookingInfo.job,
        nofdays: bookingInfo.nofdays,
        carId: new ObjectId(bookingInfo.carId)
        });
        const createdbooking = await booking.save();
        return createdbooking;
    } catch (err) {
        throw new Error ('could not confirm booking.');

    }
};