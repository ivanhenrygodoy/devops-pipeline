// config/config.js
const path = require('path');
require('dotenv').config({ path: path.resolve(process.env.APP_ENV ? `.env.${process.env.APP_ENV}` : '.env') });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    timezone: '-06:00',
  }
};
