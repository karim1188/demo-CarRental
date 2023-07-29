const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
    firstname: {
        type: 'string',
        required: true
    },
    lastname: {
        type: 'string',
        required: true
    },
    nationalId:{
        type: 'Number',
        required : true
    },
    job:{
        type: 'string',
        required: true
    },
    nofdays: {
        type: 'Number',
        required: true
    },
    carId:{
        type: Schema.Types.ObjectId,
        ref: 'car',
        required: true
    }
});

const bookingModel = model('booking', bookingSchema);

module.exports = bookingModel;