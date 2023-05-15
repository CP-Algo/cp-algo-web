const {
  models: { Submission, TestResult },
} = require('../models')
const runCode = require('./runCode')

async function runTests(submissionID) {
  const submission = await Submission.findByPk(submissionID)
  const code = submission.code
  const language = await submission.getLanguage({ raw: true })
  const tests = await (await submission.getAlgorithm()).getTests({ raw: true })
  await submission.setTests(tests.map(test => test.id), { through: { verdict: 1 } })

  let maxExecutionTime = 0
  let maxExecutionMemory = 0

  for (const test of tests) {
    const { status, time: executionTime, memory: executionMemory } = await runCode(code, language.id, test.input, test.output)

    maxExecutionTime = Math.max(maxExecutionTime, executionTime)
    maxExecutionMemory = Math.max(maxExecutionMemory, executionMemory)

    await TestResult.update(
      {
        verdict: status.id,
        executionTime,
        executionMemory,
      },
      {
        where: {
          SubmissionId: submissionID,
          TestId: test.id
        }
      }
    )
  }

  await submission.update({
    executionTime: maxExecutionTime,
    executionMemory: maxExecutionMemory,
  })
}

module.exports = runTests
