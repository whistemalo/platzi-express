
const productsRouter = require('./products.router');
const usersRouter = require('./user.router');

function routerAPI(app) {
  app.use('/api/products', productsRouter);
  app.use('/api/user', usersRouter);
}

module.exports = routerAPI;

