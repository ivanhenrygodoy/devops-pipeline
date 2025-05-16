require('dotenv').config();
const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');
const logger = require('./middlewares/logger');
const sequelize = require('../bd/postgres');
const mongoose = require('mongoose');

app.use(logger);
app.use(express.json());
app.use('/notify', notificationRoutes);

const PORT = process.env.PORT || 3001;

// Primero conectar a Postgres y Mongo, y solo si ambas van bien, arrancar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Postgres conectado');
    return mongoose.connect(process.env.MONGO_URI);
  })
  .then(() => {
    console.log('Mongo conectado');
    app.listen(PORT, () => {
      console.log(`Server escuchando en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error conectando a BD:', err);
    process.exit(1);
  });
