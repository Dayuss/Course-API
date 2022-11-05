'use strict';
const {Model} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    static associate(models) {
      Section.hasMany(models.Lesson, {
        as: 'children',
        foreignKey: 'sectionId'
      })
    }
  }
  Section.init({
    sectionId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    title: DataTypes.STRING,
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
      modelName: 'Section',
      tableName: 'sections',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
  });
  return Section;
};