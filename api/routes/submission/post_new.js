const { Router } = require('express')
const router = Router()

const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')
const createSubmission = require('../../helpers/createSubmission')

router.post('/new', authenticatedMiddleware, async function (req, res, next) {
  try {
    const userID = req.user.id
    const submission = await createSubmission(userID, req.body)

    return res.json({
      message: 'Code submitted! Taking you there in a few moments...',
      id: submission.id,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
