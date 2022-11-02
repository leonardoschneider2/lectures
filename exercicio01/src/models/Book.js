'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: { type: DataTypes.NUMBER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.NUMBER,
    totalPages: DataTypes.NUMBER
  }, {
    timestamps: false,
    underscored: true,
  });

  return Book;
};