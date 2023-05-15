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
          input:
            '5\n' +
            '0 0 1 1 1',
          output: '2',
        },
        {
          AlgorithmId: 'BINARY_SEARCH',
          input:
            '5\n' +
            '0 0 0 0 0',
          output: '-1',
        },
      ]
      await Test.bulkCreate(tests)
    }
  },
}
