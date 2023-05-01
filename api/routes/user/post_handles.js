const { Router } = require('express')
const router = Router()

const {
  models: { Handle },
} = require('../../models')
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')

router.post(
  '/handles',
  authenticatedMiddleware,
  async function (req, res, next) {
    try {
      const userID = req.user.id
      const handles = req.body.map(({ site, username }) => ({
        UserId: userID,
        site,
        username,
      }))

      await Handle.destroy({ where: { UserId: userID } })
      await Handle.bulkCreate(handles)

      return res.json({ message: 'Handles updated successfully!' })
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
