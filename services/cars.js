const { ObjectId } = require('mongoose').Types;

const carModel = require('../models/car');

module.exports.findAllcars = async () => {
  try {
    const cars = await carModel.find();
    return cars;
  } catch (err) {
    throw new Error('Could not retrieve cars.');
  }
};

module.exports.findcarById = async (carId) => {
  try {
    const car = await carModel.findById(carId).populate(
      'supplierId'
    );
    return car;
  } catch (err) {
    throw new Error('Could not find car.');
  }
};

module.exports.addNewcar = async (carInfo) => {
  try {
    const car = new carModel({
      model: carInfo.model,
      make: carInfo.make,
      description: carInfo.description,
      year: carInfo.year,
      categorie: carInfo.categorie,
      price: carInfo.price,
      imgURL: carInfo.imgURL,
      supplierId: new ObjectId(carInfo.supplierId)
    });

    const createdcar = await car.save();
    return createdcar;
  } catch (err) {
    throw new Error('Could not create car.');
  }
};

module.exports.removecar = async (carId) => {
  try {
    await carModel.deleteOne({ _id: carId });
  } catch (err) {
    throw new Error('Could not remove car.');
  }
};
