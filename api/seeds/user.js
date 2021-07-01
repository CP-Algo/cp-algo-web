const sequelize = require('../models')
const {
  models: { User },
} = sequelize

module.exports = {
  run: async () => {
    let users = await User.findAll()
    if (users.length === 0) {
      users = [
        {
          id: '75e851c1-acc6-46ea-969a-f28829a1de44',
          name: 'Nayeemul Islam Swad',
          username: 'DrSwad',
          email: 'drswad2013@gmail.com',
          password:
            '$2b$10$oTATHeIEzRRLmB0hep2Fwu36X7fPKzuYge/iyEtBbA4zNW1LtCcLa',
          verified: true,
          createdAt: sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ]
      await User.bulkCreate(users)
    }
  },
}
