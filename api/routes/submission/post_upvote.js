const { Router } = require('express')
const router = Router()

const {
  models: { Submission, User },
} = require('../../models')
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')

router.post(
  '/upvote',
  authenticatedMiddleware,
  async function (req, res, next) {
    try {
      const userID = req.user.id
      const { submission: submissionID } = req.body

      const submission = await Submission.findByPk(submissionID)
      const codebook = await submission.getCodebook()
      const author = await codebook.getUser()

      if (userID === author.id) throw new Error('Cannot upvote own submission')

      const upvoter = await User.findByPk(userID)
      if (await submission.hasUpvoter(upvoter))
        throw new Error("You've already upvoted this submission")
      await submission.addUpvoter(await User.findByPk(userID))
      await submission.increment('upvotes')
      await author.increment('points')

      return res.json({ message: 'Code updated successfully!' })
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
