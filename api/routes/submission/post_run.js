const { Router } = require('express')
const router = Router()

/* const {
  models: { Submission },
} = require('../../models') */
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')
const runCode = require('../../helpers/runCode')

router.post('/run', authenticatedMiddleware, async function (req, res, next) {
  try {
    // const userID = req.user.id
    const { input, code } = req.body

    const { status, output, executionTime, executionMemory } = await runCode(
      input,
      code
    )

    return res.json({
      status,
      message: `Time ${executionTime}ms, Memory ${executionMemory}KB`,
      output,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
