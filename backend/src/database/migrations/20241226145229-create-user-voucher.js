'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user-vouchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'user',
					key: 'id'
				}
			},
			voucherId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'vouchers',
					key: 'id'
				}	
			},
      createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user-vouchers');
  }
};
