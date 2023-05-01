const { Router } = require('express')
const router = Router({ mergeParams: true })

const {
  models: { User },
} = require('../../models')
const getUserRank = require('../../helpers/getUserRank')

router.get('/basic', async function (req, res, next) {
  try {
    const username = req.params.user
    const user = await User.findOne({ where: { username }, raw: true })
    if (!user) throw new Error('Cannot find user')
    delete user.password
    const rank = await getUserRank(user.id)
    return res.json({ ...user, rank })
  } catch (err) {
    next(err)
  }
})

module.exports = router
