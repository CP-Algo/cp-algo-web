// Get submission details
// Returns:
//  category, subCategory, algorithm, authorIDs, complexities, resources, upvotes, adds to codebooks, code
const { Router } = require('express')
const router = Router({ mergeParams: true })

/* const {
  models: { Submission, User },
} = require('../../models') */

router.get('/basic', function (_req, res, next) {
  try {
    return res.json({})
  } catch (err) {
    next(err)
  }
})

module.exports = router
