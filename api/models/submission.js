const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Submission', {
    timeComplexity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memoryComplexity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    executionTime: {
      type: DataTypes.INTEGER,
    },
    executionMemory: {
      type: DataTypes.INTEGER,
    },
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    forks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  })
}
