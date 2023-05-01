const { Router } = require('express')
const router = Router({ mergeParams: true })

const { Op } = require('sequelize')
const {
  models: { Codebook },
} = require('../../models')
const getAlgorithmsInCategory = require('../../helpers/getAlgorithmsInCategory')

router.get('/', async function (req, res, next) {
  try {
    const codebookID = req.params.codebook
    const codebook = await Codebook.findByPk(codebookID)

    const { category, algorithm, language } = req.query
    let { sortBy } = req.query

    sortBy = sortBy || ['length', 'ASC']

    let algorithms = []
    if (!algorithm && category) {
      algorithms = await getAlgorithmsInCategory(category)
    }

    let submissions = await codebook.getSubmissions({
      where: {
        ...(algorithm
          ? { AlgorithmId: algorithm }
          : category
          ? { AlgorithmId: { [Op.in]: algorithms } }
          : {}),
        ...(language ? { LanguageId: language } : {}),
      },
      order: [sortBy],
    })

    submissions = await Promise.all(
      submissions.map(async (submission) => ({
        ...submission.get({ plain: true }),
        authors: await submission.getAuthors({ raw: true }),
        language: await submission.getLanguage(),
      }))
    )

    return res.json({ ...codebook.get({ plain: true }), submissions })
  } catch (err) {
    next(err)
  }
})

module.exports = router
