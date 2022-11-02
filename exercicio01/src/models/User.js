'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.NUMBER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {
    timestamps: false,
    underscored: true,
  });

  return User;
};