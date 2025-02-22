'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ProductImage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ProductImage.belongsTo(models.Product, {
				foreignKey: 'productId',
				as: 'product',
			});
		}
	}
	ProductImage.init(
		{
			productId: {
				type: DataTypes.INTEGER,
			},
			url: {
				type: DataTypes.STRING,
			},
			createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
			deletedAt: { 
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			paranoid: true,
			modelName: 'ProductImage',
			tableName: 'product-images',
		}
	);
	return ProductImage;
};
