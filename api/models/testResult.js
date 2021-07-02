const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('TestResult', {
    verdict: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    executionTime: {
      type: DataTypes.INTEGER,
    },
    executionMemory: {
      type: DataTypes.INTEGER,
    },
  })
}
