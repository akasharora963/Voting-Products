const routes = require('next-routes')();

routes
      .add('/','/') //index route
      .add('/products/show','/products/show') //show products route
      .add('/products/voter-details','/products/voter-details'); //voter details route

module.exports = routes;
