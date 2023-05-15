const { Router } = require('express')
const router = Router()

const {
  models: { Category, SubCategory, Algorithm },
} = require('../../models')

router.get('/topics', async function (_req, res, next) {
  try {
    let [categories, subCategories, algorithms] = await Promise.all([
      Category.findAll({ raw: true }),
      SubCategory.findAll({ raw: true }),
      Algorithm.findAll({ raw: true }),
    ])

    subCategories = subCategories.map(subCategory => ({
      ...subCategory,
      type: 'subCategory',
      children: []
    }))
    algorithms.forEach(algorithm => {
      const algorithmItem = {
        ...algorithm,
        type: 'algorithm',
        children: []
      }
      subCategories.find(item => item.id === algorithm.SubCategoryId).children.push(algorithmItem)
    })
    categories = categories.map(category => ({
      ...category,
      type: 'category',
      children: []
    }))
    subCategories.forEach(subCategory => {
      const subCategoryItem = {
        ...subCategory,
      }
      categories.find(category => category.id === subCategory.CategoryId).children.push(subCategoryItem)
    })

    return res.json(categories)
  } catch (err) {
    next(err)
  }
})

module.exports = router
