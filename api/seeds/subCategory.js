const {
  models: { SubCategory },
} = require('../models')
const category_details = require('../../config/category_details')

module.exports = {
  run: async () => {
    let subCategories = await SubCategory.findAll()
    if (subCategories.length === 0) {
      subCategories = []
      category_details.forEach(({ subCategories: _subCategories, id: categoryId }) => {
        _subCategories.forEach(({ algorithms, ...subCategory }) => subCategories.push({
          ...subCategory,
          CategoryId: categoryId
        }))
      })
      await SubCategory.bulkCreate(subCategories)
    }
  },
}
