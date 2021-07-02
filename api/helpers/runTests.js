const {
  models: { Submission },
} = require('../models')

async function runTests(submissionID) {
  const submission = await Submission.findByPk(submissionID)
  const algorithm = await submission.getAlgorithm()
  const tests = await algorithm.getTests()
  await submission.setTests(tests, { through: { verdict: 'PENDING' } })
  // run all the tests in judge
  // don't forget to update submission `resources` after all the tests are done
}

module.exports = runTests
