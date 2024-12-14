'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    getTotal() {
      let total = 0;
      for (const item of this.OrderItems) {
        total += item.getTotal();
      }
      return total;
    }

    getDiscountedTotal() {
      let discountedTotal = 0;
      for (const item of this.OrderItems) {
        discountedTotal += item.getDiscountedTotal();
      }
      return discountedTotal;
    }

    getTotalProducts() {
      return this.OrderItems.length;
    }

    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId',
        as: 'OrderItems',
      });
    }
  }

  Order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
      },
      status: {
        type: DataTypes.STRING,
      },
      shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'shipping_address',
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'payment_method',
      },
      shippingCompany: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'shipping_company',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Order',
      tableName: 'order',
    }
  );

  return Order;
};
