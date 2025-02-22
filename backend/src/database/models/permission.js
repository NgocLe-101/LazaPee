'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			Permission.hasMany(models.AdminPermission, {
				foreignKey: 'permissionId',
				as: 'adminPermissions',
			})
		}
  }
  Permission.init({
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: { 
			type: DataTypes.STRING, 
			allowNull: false, 
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		deletedAt: {
			type: DataTypes.DATE
		},
  }, {
    sequelize,
		paranoid: true,
		tableName: 'permissions',
    modelName: 'Permission',
  });
  return Permission;
};
