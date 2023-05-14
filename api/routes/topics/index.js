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
      children: []
    }))
    algorithms.forEach(algorithm => {
      const algorithmItem = {
        id: algorithm.id,
        name: algorithm.name,
        type: 'algorithm',
        children: []
      }
      subCategories.find(item => item.id === algorithm.SubCategoryId).children.push(algorithmItem)
    })
    categories = categories.map(category => ({
      id: category.id,
      name: category.name,
      type: 'category',
      children: []
    }))
    subCategories.forEach(subCategory => {
      const subCategoryItem = {
        id: subCategory.id,
        name: subCategory.name,
        type: 'subCategory',
        children: subCategory.children
      }
      categories.find(category => category.id === subCategory.CategoryId).children.push(subCategoryItem)
    })

    return res.json(categories)
  } catch (err) {
    next(err)
  }
})

module.exports = router
