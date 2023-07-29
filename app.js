const express = require('express');

const cors = require('cors');

// import the function that ininitiates a DB connection.
const initiateDBConnection = require('./config/db');

// import our carsRouter
const carsRouter = require('./routes/cars');
const suppliersRouter = require('./routes/suppliers');
const authRouter = require('./routes/auth');
const bookingRouter = require('./routes/Booking');

// Let the dotenv package read and parse environment variables in the ./config/.env file


// Access the port environment variable using process.env
const PORT = process.env.PORT;
const app = express();

// an express middleware to parse JSON data in request body.
app.use(express.json());

// a middleware to allow HTTP requests from other servers
app.use(cors());

// Load the carsRouter and set its entry route to '/cars'.
// This means that any route defined inside the carsRouter will be prefixed by '/cars' first.
app.use('/cars', carsRouter);
// Load the suppliersRouter and set its entry route to '/suppliers'.
// This means that any route defined inside the suppliersRouter will be prefixed by '/suppliers' first.
app.use('/suppliers', suppliersRouter);
// Load the authRouter and set its entry route to '/auth'.
// This means that any route defined inside the auth will be prefixed by '/auth' first.
app.use('/auth', authRouter);

app.use('/bookings', bookingRouter);


app.listen(PORT, async () => {
  console.log(`Server has been started and is listening to port ${PORT}`);
  // Call the asynchronous function to initiate the DB connection once the server starts listening.
  await initiateDBConnection();
});
