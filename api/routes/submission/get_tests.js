// Get submission test details
// Returns:
//  arrays of test status
const { Router } = require('express')
const router = Router({ mergeParams: true })

/* const {
  models: { Test, TestResult },
} = require('../../models') */

router.get('/tests', function (_req, res, next) {
  try {
    return res.json({})
  } catch (err) {
    next(err)
  }
})

module.exports = router
