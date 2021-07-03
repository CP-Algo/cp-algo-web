const {
  models: { Submission },
} = require('../models')
const runCode = require('./runCode')

async function runTests(submissionID) {
  const submission = await Submission.findByPk(submissionID)
  const algorithm = await submission.getAlgorithm()
  const tests = await algorithm.getTests()
  await submission.setTests(tests, { through: { verdict: 'PENDING' } })

  // run all the tests in judge
  // don't forget to update submission `resources` after all the tests are done

  let maxExecutionTime = 0
  let maxExecutionMemory = 0

  for (const test of tests) {
    const { status, executionTime, executionMemory } = await runCode(
      test.input,
      code,
      test.output
    )

    maxExecutionTime = Math.max(maxExecutionTime, executionTime)
    maxExecutionMemory = Math.max(maxExecutionMemory, executionMemory)

    await submission.setTestResult({
      TestId: test.id,
      verdict: status,
      executionTime,
      executionMemory,
    })
  }

  await submission.update({
    executionTime: maxExecutionTime,
    executionMemory: maxExecutionMemory,
  })
}

module.exports = runTests
