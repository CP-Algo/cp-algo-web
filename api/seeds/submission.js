const {
  models: { Submission },
} = require('../models')

module.exports = {
  run: async () => {
    let submissions = await Submission.findAll()
    if (submissions.length === 0) {
      submissions = [
        {
          timeComplexity: '1',
          memoryComplexity: '1',
          code: '// This is my code',
          length: 18,
          CodebookId: '75e851c1-acc6-46ea-969a-f28829a1de44',
          AlgorithmId: 'BINARY_SEARCH',
          LanguageId: 'CPP_11',
          upvotes: 1,
        },
        {
          timeComplexity: 'N',
          memoryComplexity: 'N',
          code: '// This is my second code',
          length: 25,
          CodebookId: '75e851c1-acc6-46ea-969a-f28829a1de44',
          AlgorithmId: 'BINARY_SEARCH',
          LanguageId: 'CPP_11',
        },
      ]
      await Submission.bulkCreate(submissions)
    }
  },
}
