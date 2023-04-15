const router = require('express').Router(); // import the router from express
const categoryRoutes = require('./category-routes'); // import the category routes
const productRoutes = require('./product-routes'); // import the product routes
const tagRoutes = require('./tag-routes'); // import the tag routes

router.use('/categories', categoryRoutes); // use the category routes
router.use('/products', productRoutes); // use the product routes
router.use('/tags', tagRoutes); // use the tag routes

module.exports = router; // export the router
