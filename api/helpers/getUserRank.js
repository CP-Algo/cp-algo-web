const sequelize = require('../models')
const {
  models: { User },
} = sequelize

async function getUserRank(userID) {
  return parseInt(
    (
      await User.findAll({
        attributes: [
          'id',
          [sequelize.literal('(RANK() OVER (ORDER BY points DESC))'), 'rank'],
        ],
      })
    )
      .find((user) => user.id === userID)
      .get('rank')
  )
}

module.exports = getUserRank
