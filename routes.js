const routes = require('next-routes')();

routes
      .add('/','/')
      .add('/products/show','/products/show')
      .add('/products/voter-details','/products/voter-details');

module.exports = routes;
