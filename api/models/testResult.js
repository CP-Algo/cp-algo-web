const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('TestResult', {
    verdict: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    executionTime: {
      type: DataTypes.DOUBLE,
    },
    executionMemory: {
      type: DataTypes.DOUBLE,
    },
  })
}
