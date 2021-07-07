const {
  models: { Algorithm },
} = require('../models')

module.exports = {
  run: async () => {
    let algorithms = await Algorithm.findAll()
    if (algorithms.length === 0) {
      algorithms = [
        {
          id: 'BINARY_SEARCH',
          name: 'Binary Search',
          description: 'Search sorted data in O(log(N))',
          inputFormat: 'N\nA_1, A_2, \\cdots, A_{N}',
          inputDefinition: 'N \\eq Array size\nA \\eq Sorted array',
          inputConstraints: '1 \\le N \\le 100\n0 \\le A_i \\le 1',
          outputFormat: 'FirstOne',
          outputDefinition:
            'FirstOne \\eq Index of the first element that equals to 1, -1 if none exists. More formally, the smallest index, FirstOne, satisfying A_{FirstOne} = 1. And -1 if no such index exists.',
          outputConstraints: '0 \\le FirstOne \\lt N',
          SubCategoryId: 'ADVANCED_SEARCH_ALGORITHMS',
        },
      ]
      await Algorithm.bulkCreate(algorithms)
    }
  },
}
