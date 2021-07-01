const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Handle', {
    site: {
      type: DataTypes.ENUM('CODEFORCES', 'CODECHEF', 'HACKERRANK', 'LIGHTOJ'),
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}
