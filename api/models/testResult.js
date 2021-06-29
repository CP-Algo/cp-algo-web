const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('TestResult', {
    verdict: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    executionTime: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    executionMemory: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  })
}
