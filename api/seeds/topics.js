const {
  models: { Category, SubCategory, Algorithm },
} = require('../models')

module.exports = {
  run: async () => {
    let categories = await Category.findAll()
    if (categories.length === 0) {
      categories = [
        {
          id: 'EFFICIENT_SEARCH_ALGORITHMS',
          name: 'Efficient Search Algorithms',
        },
      ]
      await Category.bulkCreate(categories)
    }

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

    let algorithms = await Algorithm.findAll()
    if (algorithms.length === 0) {
      algorithms = [
        {
          id: 'BINARY_SEARCH',
          name: 'Binary Search',
          SubCategoryId: 'ADVANCED_SEARCH_ALGORITHMS',
        },
      ]
      await Algorithm.bulkCreate(algorithms)
    }
  },
}
