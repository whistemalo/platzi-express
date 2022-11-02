const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'amaya',
    password: 'admin123',
    database: 'my_store',
    // host: process.env.HOST,
    // port: process.env.DB_PORT,
    // user: process.env.DB_USER ,
    // password: 'admin123',
    // database: process.env.DB_NAME ,
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
