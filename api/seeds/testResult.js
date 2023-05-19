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
          executionTime: 0.007,
          executionMemory: 2,
        },
        {
          TestId: 2,
          SubmissionId: 1,
          verdict: 4,
          verdictDescription: getVerdictDescription(4),
          executionTime: 0.1,
          executionMemory: 12,
        },
        {
          TestId: 3,
          SubmissionId: 1,
          verdict: 3,
          verdictDescription: getVerdictDescription(3),
          executionTime: 0.007,
          executionMemory: 2,
        },
        {
          TestId: 4,
          SubmissionId: 1,
          verdict: 4,
          verdictDescription: getVerdictDescription(4),
          executionTime: 0.1,
          executionMemory: 12,
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
        {
          TestId: 3,
          SubmissionId: 2,
          verdict: 5,
          verdictDescription: getVerdictDescription(1),
        },
        {
          TestId: 4,
          SubmissionId: 2,
          verdict: 6,
          verdictDescription: getVerdictDescription(1),
        },
      ]
      await TestResult.bulkCreate(testResults)
    }
  },
}
