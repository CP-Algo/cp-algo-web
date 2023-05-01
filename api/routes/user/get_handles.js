const { Router } = require('express')
const router = Router({ mergeParams: true })

const {
  models: { User, Handle },
} = require('../../models')

router.get('/handles', async function (req, res, next) {
  try {
    const username = req.params.user

    const user = await User.findOne({ where: { username }, raw: true })
    if (!user) throw new Error('Cannot find user')
    const userID = user.id

    const handles = await Handle.findAll({
      where: {
        UserId: userID,
      },
    })
    return res.json({ handles })
  } catch (err) {
    next(err)
  }
})

module.exports = router
