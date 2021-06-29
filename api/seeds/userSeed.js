const sequelize = require('../models')

module.exports = {
  run: async () => {
    let users = await sequelize.models.User.findAll()
    if (users.length === 0) {
      users = [
        {
          name: 'John',
          username: 'john',
          email: 'john@gmail.com',
          password: '123',
        },
        {
          name: 'Edward',
          username: 'edward',
          email: 'edward@gmail.com',
          password: '789',
          role: 'ADMIN',
        },
      ]
      await sequelize.models.User.bulkCreate(users)
    }
  },
}
