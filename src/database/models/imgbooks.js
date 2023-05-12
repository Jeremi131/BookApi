'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImgBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ImgBooks.belongsTo(models.Books, { foreignKey: 'book_id' });
    }
  }
  ImgBooks.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    imgs_books_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sequelize,
    modelName: 'ImgBooks',
  });
  return ImgBooks;
};