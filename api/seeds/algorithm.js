const {
  models: { Algorithm },
} = require('../models')
const category_details = require('../../config/category_details')

module.exports = {
  run: async () => {
    let algorithms = await Algorithm.findAll()
    if (algorithms.length === 0) {
      algorithms = []
      category_details.forEach(({ subCategories: _subCategories }) => {
        _subCategories.forEach(({ algorithms: _algorithms, id: subCategoryId }) => {
          _algorithms.forEach((algorithm) => {
            algorithms.push({
              ...algorithm,
              SubCategoryId: subCategoryId
            })
          })
        })
      })
      await Algorithm.bulkCreate(algorithms)
    }
  },
}
