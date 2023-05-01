/* const {
  models: { Submission },
} = require('../models') */

// async function runCode(input, code, expected_output) {
async function runCode() {
  const status = 'ACCEPTED'
  const output = 'Hello World'
  const executionTime = 123
  const executionMemory = 150

  return await Promise.resove({
    status,
    output,
    executionTime,
    executionMemory,
  })
}

module.exports = runCode
