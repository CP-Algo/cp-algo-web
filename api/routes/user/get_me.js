const { Router } = require('express')
const router = Router()

const {
  models: { User },
} = require('../../models')
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')
const getUserRank = require('../../helpers/getUserRank')

router.get('/', authenticatedMiddleware, async function (req, res, next) {
  try {
    const userID = req.user.id
    const user = await User.findByPk(userID, { raw: true })
    if (!user) throw new Error('Cannot find user')
    delete user.password
    const rank = await getUserRank(user.id)
    return res.json({ ...user, rank })
  } catch (err) {
    next(err)
  }
})

module.exports = router
