const {
  models: { Test },
} = require('../models')

module.exports = {
  run: async () => {
    let tests = await Test.findAll()
    if (tests.length === 0) {
      tests = [
        {
          AlgorithmId: 'BINARY_SEARCH',
          input: 'i1',
          output: 'o1',
        },
        {
          AlgorithmId: 'BINARY_SEARCH',
          input: 'i2',
          output: 'o2',
        },
      ]
      await Test.bulkCreate(tests)
    }
  },
}
