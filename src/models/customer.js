const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
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
  Customer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    dateOfBirth: DataTypes.DATEONLY,
    address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Customer',
    timestamps: true,
  });
  return Customer;
};
