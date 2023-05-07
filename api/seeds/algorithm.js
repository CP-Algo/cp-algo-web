const {
  models: { Algorithm },
} = require('../models')
const algo = require('../../config/algo')

module.exports = {
  run: async () => {
    let algorithms = await Algorithm.findAll()
    if (algorithms.length === 0) {
      algorithms = []
      algo.forEach(({ subCategories: _subCategories }) => {
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
