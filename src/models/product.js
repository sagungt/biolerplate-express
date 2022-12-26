const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Order, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    uom: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true,
  });
  return Product;
};
