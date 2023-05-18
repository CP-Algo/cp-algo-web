const {
  models: { Handle, User },
} = require('../models')

module.exports = {
  run: async () => {
    let handles = await Handle.findAll()
    if (handles.length === 0) {
      const user = await User.findOne()
      handles = [
        {
          site: 'CODEFORCES',
          username: 'DrSwadCF',
          UserId: user.id,
        },
        {
          site: 'CODECHEF',
          username: 'DrSwadCC',
          UserId: user.id,
        },
      ]
      await Handle.bulkCreate(handles)
    }
  },
}
