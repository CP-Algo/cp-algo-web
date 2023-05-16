const {
  models: { TestResult },
} = require('../models')

const status = require('../../config/judge0_mappings/status')

function getVerdictDescription(verdict) {
  return status.find(({id}) => id == verdict).description
}

module.exports = {
  run: async () => {
    let testResults = await TestResult.findAll()
    if (testResults.length === 0) {
      testResults = [
        {
          TestId: 1,
          SubmissionId: 1,
          verdict: 3,
          verdictDescription: getVerdictDescription(3),
          executionTime: 11,
          executionMemory: 12,
        },
        {
          TestId: 2,
          SubmissionId: 1,
          verdict: 4,
          verdictDescription: getVerdictDescription(4),
          executionTime: 21,
          executionMemory: 22,
        },
        {
          TestId: 1,
          SubmissionId: 2,
          verdict: 5,
          verdictDescription: getVerdictDescription(1),
        },
        {
          TestId: 2,
          SubmissionId: 2,
          verdict: 6,
          verdictDescription: getVerdictDescription(1),
        },
      ]
      await TestResult.bulkCreate(testResults)
    }
  },
}
