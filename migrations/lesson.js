'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lessons', {
      lessonId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        field: 'lesson_id'
      },
      sectionId:{
        type: Sequelize.UUID,
        field: 'section_id'
      },
      title: {
        type: Sequelize.STRING,
      },
      lessonType: {
        type: Sequelize.STRING,
        field:'lesson_type'
      },
      isRequired: {
        type: Sequelize.BOOLEAN,
        field: 'is_required'
      },
      isPreview: {
        type: Sequelize.BOOLEAN,
        field: 'is_preview'
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
    await queryInterface.dropTable('lessons');
  }
};