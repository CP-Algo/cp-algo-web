const {
  models: { Verification },
} = require('../models')

module.exports = {
  run: async () => {
    await Verification.bulkCreate([
      {
        UserId: 'a3d368f7-95a0-4f5e-954a-1102a39beddc',
        token: 'UZnL0dlanQ',
      }
    ])
  },
}
