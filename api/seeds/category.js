const {
  models: { Category },
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
  },
}
