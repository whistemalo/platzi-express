const {Sequelize} = require('sequelize');

const {config} = require ('../config/config')
const setupModels = require('../db/models/index');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPortMYSQL}/${config.dbName}`;
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: (message) => {
    console.log(message);
  },
});

// const sequelize = new Sequelize(URI, {
//   dialect: 'postgress',
//   logging: (message) => {
//     console.log(message);
//   },
// });

setupModels(sequelize)

//revisa los modelos y los crea en la base de datos, es dcir crea las tablas

sequelize.sync();

module.exports= sequelize;


































































