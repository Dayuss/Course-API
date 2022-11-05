'use strict';
const {Model} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
    }
  }
  Lesson.init({
    lessonId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    sectionId: DataTypes.UUID,
    title: DataTypes.STRING,
    lessonType: DataTypes.STRING,
    isRequired: DataTypes.BOOLEAN,
    isPreview: DataTypes.BOOLEAN,
    seq: DataTypes.INTEGER,
    createdAt : {
        type : DataTypes.DATE,
        get : function() {
            return this.getDataValue('createdAt') != null ? moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss') : null
        }
    },
    updatedAt : {
        type : DataTypes.DATE,
        get : function() {
            return this.getDataValue('updatedAt') != null ? moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss') : null
        }
    },
  }, {
      sequelize,
      modelName: 'Lesson',
      tableName: 'lessons',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
  });
  return Lesson;
};