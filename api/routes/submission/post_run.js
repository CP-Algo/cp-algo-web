const { Router } = require('express')
const router = Router()

const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')
const runCode = require('../../helpers/runCode')

router.post('/run', authenticatedMiddleware, async function (req, res, next) {
  try {
    const { code, language, input } = req.body

    const { status, stdout, stderr, time, memory } = await runCode(code, language, input)

    return res.json({
      status,
      stdout,
      stderr,
      time,
      memory,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
