const {
  models: { Submission },
} = require('../models')
const runCode = require('./runCode')

async function runTests(submissionID) {
  const submission = await Submission.findByPk(submissionID)
  const algorithm = await submission.getAlgorithm()
  const language = await submission.getLanguage()
  const tests = await algorithm.getTests()
  await submission.setTests(tests, { through: { verdict: 1 } })

  // run all the tests in judge
  // don't forget to update submission `resources` after all the tests are done

  let maxExecutionTime = 0
  let maxExecutionMemory = 0

  for (const test of tests) {
    const { status, time: executionTime, memory: executionMemory } = await runCode(code, language, test.input, test.output)

    maxExecutionTime = Math.max(maxExecutionTime, parseFloat(executionTime))
    maxExecutionMemory = Math.max(maxExecutionMemory, parseFloat(executionMemory))

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
