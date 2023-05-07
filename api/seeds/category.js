const {
  models: { Category },
} = require('../models')
const category_details = require('../../config/category_details')

module.exports = {
  run: async () => {
    let categories = await Category.findAll()
    if (categories.length === 0) {
      categories = []
      category_details.forEach(({ subCategories, ...category }) => categories.push(category))
      await Category.bulkCreate(categories)
    }
  },
}
