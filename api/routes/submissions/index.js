const { Router } = require('express')
const router = Router()

const { Op } = require('sequelize')
const {
  models: { Submission },
} = require('../../models')
const getAlgorithmsInCategory = require('../../helpers/getAlgorithmsInCategory')

router.get('/submissions', async function (req, res, next) {
  try {
    // TODO: Filter by author
    const { category, algorithm, language } = req.query

    let { sortBy, page, rows } = req.query

    rows = rows || 20
    page = page || 1
    const offset = rows * (page - 1)
    sortBy = sortBy || ['createdAt', 'DESC']

    let algorithms = []
    if (!algorithm && category) {
      algorithms = await getAlgorithmsInCategory(category)
    }

    const { rows: submissionRows, count: submissionsCount } =
      await Submission.findAndCountAll({
        where: {
          ...(algorithm
            ? { AlgorithmId: algorithm }
            : category
            ? { AlgorithmId: { [Op.in]: algorithms } }
            : {}),
          ...(language ? { LanguageId: language } : {}),
        },
        order: [sortBy],
        limit: rows,
        offset,
      })

    const hasPrev = page > 1
    const hasNext = submissionsCount > offset + rows

    const submissions = await Promise.all(
      submissionRows.map(async (submission, index) => ({
        ...submission.get({ plain: true }),
        rank: offset + index + 1,
        authors: await submission.getAuthors({ raw: true }),
        author: await (await submission.getCodebook()).getUser(),
        algorithm: await submission.getAlgorithm(),
        language: await submission.getLanguage(),
      }))
    )

    return res.json({ submissions, hasPrev, hasNext })
  } catch (err) {
    next(err)
  }
})

module.exports = router
