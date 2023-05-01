const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('AlgorithmExample', {
    input: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    output: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}
