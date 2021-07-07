const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Algorithm', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    inputFormat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    inputDefinition: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    inputConstraints: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    outputFormat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    outputDefinition: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    outputConstraints: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  })
}
