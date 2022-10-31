module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('users_books', {
      userId: {
        type: sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'books',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },

  down: async (queryInterface, sequelize) => {
    await queryInterface.dropTable('users_books');
  },
};