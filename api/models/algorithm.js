const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Algorithm', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}
