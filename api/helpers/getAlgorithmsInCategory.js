const {
  models: { Category, SubCategory },
} = require('../models')

async function getAlgorithmsInCategory(category) {
  const subCategories = await (
    await Category.findByPk(category)
  ).getSubCategories()
  return await subCategories.reduce(async function (accP, curr) {
    const acc = await accP
    const newAlgorithms = await (
      await SubCategory.findByPk(curr.id)
    ).getAlgorithms()
    acc.push(...newAlgorithms.map((algorithm) => algorithm.id))
    return acc
  }, Promise.resolve([]))
}

module.exports = getAlgorithmsInCategory
