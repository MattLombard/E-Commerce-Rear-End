const router = require('express').Router(); // import the router from express
const apiRoutes = require('./api'); // import the api routes

router.use('/api', apiRoutes); // use the api routes

router.use((req, res) => {
  // if no route is found, return a 404 error
  res.send('<h1>Wrong Route!</h1>'); // return the error as HTML
});

module.exports = router; // export the router
