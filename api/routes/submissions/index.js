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
    const { algorithm, language } = req.query

    let { sort_by, page, count } = req.query

    count = count || 20
    page = page || 1
    const offset = count * (page - 1)
    let sortBy = ['length', 'DESC']

    const { rows: submissionRows, count: submissionsCount } =
      await Submission.findAndCountAll({
        where: {
          ...(algorithm
            ? { AlgorithmId: algorithm }
            : {}),
          ...(language ? { LanguageId: language } : {}),
        },
        order: [sortBy],
        limit: count,
        offset,
      })

    const submissions = await Promise.all(
      submissionRows.map(async (submission, index) => ({
        ...submission.get({ raw: true }),
        rank: offset + index + 1,
        authors: await submission.getAuthors({ raw: true }),
        author: await (await submission.getCodebook()).getUser({ raw: true }),
        algorithm: await submission.getAlgorithm({ raw: true }),
        language: await submission.getLanguage({ raw: true }),
      }))
    )

    return res.json({ submissions, total: submissionsCount })
  } catch (err) {
    next(err)
  }
})

module.exports = router
