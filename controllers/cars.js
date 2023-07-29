const carsService = require('../services/cars');

module.exports.getcars = async (req, res) => {
  try {
    const cars = await carsService.findAllcars();
    return res.send({ cars });
  } catch (err) {
    // this denotes a server error, therefore status code should be 500.
    res.status(500);
    return res.send({
      error: err.message
    });
  }
};

module.exports.getcar = async (req, res) => {
  // notice how we extract the carId from the dynamic route that should be /cars/:carId
  const carId = req.params.carId;
  try {
    const car = await carsService.findcarById(carId);
    if (!car) {
      return res.status(404).send({
        error: 'car not found.'
      });
    }
    return res.send({
      car: car
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
};

module.exports.postcar = async (req, res) => {
  const carInfo = {
    model: req.body.model,
    make: req.body.make,
    description: req.body.description,
    year: req.body.year,
    categorie: req.body.categorie,
    price: req.body.price,
    imgURL: req.body.imgURL,
    supplierId: req.body.supplierId
  };

  try {
    console.log('Received carInfo:', carInfo); // Add this line for debugging
    const createdcar = await carsService.addNewcar(carInfo);
    return res.status(201).send({
      msg: 'car created successfully.',
      carId: createdcar._id
    });
  } catch (err) {
    console.error('Error creating car:', err); // Add this line for debugging
    return res.status(500).send({
      error: err.message
    });
  }
};


module.exports.deletecar = async (req, res) => {
  const carId = req.params.carId;
  try {
    await carsService.removecar(carId);
    return res.send({
      msg: 'car deleted successfully.'
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};
