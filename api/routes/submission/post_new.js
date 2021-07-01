const { Router } = require('express')
const router = Router()

/* const {
  models: { Submission, User },
} = require('../../models') */
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')

router.post('/new', authenticatedMiddleware, function (_req, res, next) {
  try {
    return res.json({ message: 'Code submitted successfully!' })
  } catch (err) {
    next(err)
  }
})

module.exports = router
