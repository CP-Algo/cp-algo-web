const { Router } = require('express')
const router = Router()

const {
  models: { Category, SubCategory, Algorithm },
} = require('../../models')

router.get('/topics', async function (_req, res, next) {
  try {
    const [categories, subCategories, algorithms] = await Promise.all([
      Category.findAll(),
      SubCategory.findAll(),
      Algorithm.findAll(),
    ])

    return res.json({
      categories,
      subCategories,
      algorithms,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
