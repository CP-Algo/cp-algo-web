// Get contributor list
// Parameters:
//  page
//  user - substring search
// Returns:
//  Rows of rank, userID, username, name, points, total submitted codes

const { Router } = require('express')
const router = Router()

const {
  models: { User },
} = require('../../models')

router.get('/contributors', async function (req, res, next) {
  try {
    const ROWS_PER_PAGE = 10
    const page = req.query.page || 1
    const offset = ROWS_PER_PAGE * (page - 1)

    const { rows: contributorRows, count: contributorsCount } =
      await User.findAndCountAll({
        attributes: ['id', 'username', 'name', 'points', 'submissions'],
        order: [['points', 'DESC']],
        limit: ROWS_PER_PAGE,
        offset,
        raw: true,
      })

    const contributors = contributorRows.map((contributor, index) => ({
      ...contributor,
      rank: offset + index + 1,
    }))

    const hasPrev = page > 1
    const hasNext = contributorsCount > offset + ROWS_PER_PAGE

    return res.json({
      contributors,
      hasPrev,
      hasNext,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
