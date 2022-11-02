const { Pool } = require('pg');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'amaya',
//   password: 'admin123',
//   database: 'my_store',
//   // host: process.env.HOST,
//   // port: process.env.DB_PORT,
//   // user: process.env.DB_USER ,
//   // password: 'admin123',
//   // database: process.env.DB_NAME ,
// });
module.exports = pool;
