const { Router } = require('express')
const router = Router()

const {
  models: { Language },
} = require('../../models')

router.get('/language', async function (_req, res, next) {
  try {
    const languages = await Language.findAll()

    return res.json(languages)
  } catch (err) {
    next(err)
  }
})

module.exports = router
