const {
  models: { SubCategory },
} = require('../models')
const algo = require('../../config/algo')

module.exports = {
  run: async () => {
    let subCategories = await SubCategory.findAll()
    if (subCategories.length === 0) {
      subCategories = []
      algo.forEach(({ subCategories: _subCategories, id: categoryId }) => {
        _subCategories.forEach(({ algorithms, ...subCategory }) => subCategories.push({
          ...subCategory,
          CategoryId: categoryId
        }))
      })
      await SubCategory.bulkCreate(subCategories)
    }
  },
}
