const fs = require('fs')
const { Sequelize } = require('sequelize')
const { db, env } = require('../../config')
const sequelize = new Sequelize(db)

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => require(`./${file}`)(sequelize))

// Model Associations
const { User, Verification, ResetPassword } = sequelize.models

// User <- Verification
User.hasOne(Verification)
Verification.belongsTo(User, {
  foreignKey: {
    name: 'UserId',
    allowNull: false,
  },
})

// User <- ResetPassword
User.hasOne(ResetPassword)
ResetPassword.belongsTo(User, {
  foreignKey: {
    name: 'UserId',
    allowNull: false,
  },
})

if (env !== 'production') {
  ;(async () => {
    await sequelize.sync({ sync: true })
    // eslint-disable-next-line no-console
    console.log('Database synced by sequelize models')
  })()
}

module.exports = sequelize
