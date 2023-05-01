const { Router } = require('express')
const router = Router()

const {
  models: { Submission },
} = require('../../models')
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')
const runTests = require('../../helpers/runTests')

router.post('/code', authenticatedMiddleware, async function (req, res, next) {
  try {
    const userID = req.user.id
    const { submission: submissionID, code } = req.body

    const submission = await Submission.findByPk(submissionID)
    const codebook = await submission.getCodebook()
    const author = await codebook.getUser()

    if (userID !== author.id)
      throw new Error('You are not authorized to update the submission')

    await submission.update({ code, length: code.length })

    runTests(submission.id)

    return res.json({ message: 'Code updated successfully!' })
  } catch (err) {
    next(err)
  }
})

module.exports = router
