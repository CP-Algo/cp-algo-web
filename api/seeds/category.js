const {
  models: { Category },
} = require('../models')
const algo = require('../../config/algo')

module.exports = {
  run: async () => {
    let categories = await Category.findAll()
    if (categories.length === 0) {
      categories = []
      algo.forEach(({ subCategories, ...category }) => categories.push(category))
      await Category.bulkCreate(categories)
    }
  },
}
