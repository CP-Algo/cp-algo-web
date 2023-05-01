const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Test', {
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
