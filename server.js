const express = require('express'); // import the express server
const routes = require('./routes'); // import the routes
const sequelize = require('./config/connection'); // import the sequelize connection

const app = express(); // create the server
const PORT = process.env.PORT || 3001; // use the port from the environment or 3001

app.use(express.json()); // parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parse incoming requests with urlencoded payloads

app.use(routes); // use the routes

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  // sync the models to the database
  app.listen(PORT, () => {
    // turn on the server
    console.log(`App listening on port ${PORT}!`); // log the port
  });
});
