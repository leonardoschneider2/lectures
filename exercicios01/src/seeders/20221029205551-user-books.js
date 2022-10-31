'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users_books',
    [
      { user_id: 1, book_id: 1 },
      { user_id: 1, book_id: 3 },
      { user_id: 2, book_id: 1 },
      { user_id: 2, book_id: 2 },
      { user_id: 3, book_id: 1 },
      { user_id: 3, book_id: 2 },
      { user_id: 3, book_id: 3 },
    ],
    {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users_books', null, {}),
};
