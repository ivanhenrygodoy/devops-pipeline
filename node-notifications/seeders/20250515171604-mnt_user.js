'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mnt_users', [
      {
        username: 'henry_dev',
        email: 'henry@example.com',
        password_hash: '$2b$10$wV.F3zXdbkP9fO0yQJzyeu9pH4zGb5dz6cY4MRpBiGJ3EZGpCpjPy', // bcrypt hash
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'admin_user',
        email: 'admin@example.com',
        password_hash: '$2b$10$fMuCjDP6JG/vLSYdQl5GquB5U9A2Oyf58g/FlvcKp34rCiyEnoD2i',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mnt_users', null, {});
  }
};


