const {
  models: { SubCategory },
} = require('../models')

module.exports = {
  run: async () => {
    let subCategories = await SubCategory.findAll()
    if (subCategories.length === 0) {
      subCategories = [
        {
          id: 'ADVANCED_SEARCH_ALGORITHMS',
          name: 'Advanced',
          CategoryId: 'EFFICIENT_SEARCH_ALGORITHMS',
        },
      ]
      await SubCategory.bulkCreate(subCategories)
    }
  },
}
