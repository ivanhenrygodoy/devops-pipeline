const mongoose = require('mongoose');
const { uri } = require('../config/mongoConfig');

mongoose.connect(uri)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error en conexión MongoDB:', err));

module.exports = mongoose;

