const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Customer, {
        foreignKey: 'CustomerId',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      });
      this.belongsTo(models.Product, {
        foreignKey: 'ProductId',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      });
    }
  }
  Order.init({
    CustomerId: DataTypes.BIGINT,
    ProductId: DataTypes.BIGINT,
    orderDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: true,
  });
  return Order;
};
