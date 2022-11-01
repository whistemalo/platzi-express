const productsRouter = require('./products.router');
const usersRouter = require('./user.router');
const categoryRouter = require('./categories.router')

function routerAPI(app) {
  app.use('/api/products', productsRouter);
  app.use('/api/user', usersRouter);
  app.use('/api/category',categoryRouter)

}

module.exports = routerAPI;

