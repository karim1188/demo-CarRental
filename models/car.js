const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  model: {
    type: 'String',
    required: true
  },
  make: {
    type: 'String',
    required: true
  }, 
  description: {
    type: 'String',
    required: true
  },
  year: {
    type: 'String',
    required: true
  },
  categorie: {
    type: 'String',
    required: true
  },
  price: {
    type: 'Number',
    required: true
  },
  imgURL: {
    type: 'String'
  },
  supplierId: {
    type: Schema.Types.ObjectId,
    ref: 'supplier',
    required: true
  }
});
const carModel = model('car', carSchema);

module.exports = carModel;