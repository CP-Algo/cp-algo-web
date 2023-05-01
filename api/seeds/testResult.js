const {
  models: { TestResult },
} = require('../models')

module.exports = {
  run: async () => {
    let testResults = await TestResult.findAll()
    if (testResults.length === 0) {
      testResults = [
        {
          TestId: 1,
          SubmissionId: 1,
          verdict: 'ACCEPTED',
          executionTime: 11,
          executionMemory: 12,
        },
        {
          TestId: 2,
          SubmissionId: 1,
          verdict: 'WRONG_ANSWER',
          executionTime: 21,
          executionMemory: 22,
        },
        {
          TestId: 1,
          SubmissionId: 2,
          verdict: 'PENDING',
        },
        {
          TestId: 2,
          SubmissionId: 2,
          verdict: 'PENDING',
        },
      ]
      await TestResult.bulkCreate(testResults)
    }
  },
}
