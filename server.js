const next = require('next');// using next routes
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const {createServer} = require('http')

app.prepare().then(() => {
  createServer(handler).listen(3000,err=>{
    if(err) throw err;
    console.log("Ready to host...on port 3000");//indication of starting of server on local host
  });
});
