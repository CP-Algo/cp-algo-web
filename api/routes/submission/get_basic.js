// Get submission details
// Returns:
//  category, subCategory, algorithm, authorIDs, complexities, resources, upvotes, forks, code
const { Router } = require('express')
const router = Router({ mergeParams: true })

const {
  models: { Submission },
} = require('../../models')

router.get('/basic', async function (req, res, next) {
  try {
    const submissionID = req.params.submission

    const submission = await Submission.findByPk(submissionID)
    const algorithm = await submission.getAlgorithm()
    const subCategory = await algorithm.getSubCategory()
    const category = await subCategory.getCategory()
    const authors = await submission.getAuthors()

    return res.json({
      ...submission.get({ plain: true }),
      algorithm: algorithm.id,
      subCategory: subCategory.id,
      category: category.id,
      authors: authors.map((author) => author.id),
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
