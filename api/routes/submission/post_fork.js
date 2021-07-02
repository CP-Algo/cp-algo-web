const { Router } = require('express')
const router = Router()

const {
  models: { Submission, User },
} = require('../../models')
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')
const createSubmission = require('../../helpers/createSubmission')

router.post('/fork', authenticatedMiddleware, async function (req, res, next) {
  try {
    const userID = req.user.id
    const { submission: submissionID } = req.body

    let submission = await Submission.findByPk(submissionID)

    const forker = await User.findByPk(userID)
    if (await submission.hasForker(forker))
      throw new Error("You've already forked this submission")
    await submission.addForker(forker)
    await submission.increment('forks')

    submission = await createSubmission(
      userID,
      {
        ...submission.get({ plain: true }),
        algorithm: submission.AlgorithmId,
        language: submission.LanguageId,
        codebook: submission.CodebookId,
      },
      submission.id
    )

    return res.json({ message: 'Code forked successfully!', id: submission.id })
  } catch (err) {
    next(err)
  }
})

module.exports = router
