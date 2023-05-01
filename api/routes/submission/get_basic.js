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
    const authors = await submission.getAuthors({ raw: true })

    return res.json({
      ...submission.get({ plain: true }),
      algorithm,
      subCategory,
      category,
      authors,
      language: await submission.getLanguage(),
      codebook: await submission.getCodebook(),
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
