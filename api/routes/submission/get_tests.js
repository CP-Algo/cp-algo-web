const { Router } = require('express')
const router = Router({ mergeParams: true })

const {
  models: { Submission },
} = require('../../models')

router.get('/tests', async function (req, res, next) {
  try {
    const submissionID = req.params.submission
    const submission = await Submission.findByPk(submissionID)
    const tests = await submission.getTests()

    return res.json(tests)
  } catch (err) {
    next(err)
  }
})

module.exports = router
