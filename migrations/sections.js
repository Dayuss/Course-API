'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sections', {
      sectionId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        field: 'section_id'
      },
      title: {
        type: Sequelize.STRING,
      },
      seq: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sections');
  }
};