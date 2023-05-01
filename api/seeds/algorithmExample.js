const {
  models: { AlgorithmExample },
} = require('../models')

module.exports = {
  run: async () => {
    let algorithmExamples = await AlgorithmExample.findAll()
    if (algorithmExamples.length === 0) {
      algorithmExamples = [
        {
          AlgorithmId: 'BINARY_SEARCH',
          input: '2\n0 1\n',
          output: '1',
        },
        {
          AlgorithmId: 'BINARY_SEARCH',
          input: '2\n0 0\n',
          output: '-1',
        },
      ]
      await AlgorithmExample.bulkCreate(algorithmExamples)
    }
  },
}
