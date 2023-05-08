const {
  models: { Submission, SubmissionAuthor },
} = require('../models')
const runTests = require('./runTests')

async function createSubmission(authorID, data) {
  const { algorithm, language, timeComplexity, memoryComplexity, code } = data
  const submission = await Submission.create({
    timeComplexity,
    memoryComplexity,
    code,
    length: code.length,
    CodebookId: authorID,
    AlgorithmId: algorithm,
    LanguageId: language,
  })

  await SubmissionAuthor.create({
    UserId: authorID,
    SubmissionId: submission.id,
  })

  runTests(submission.id)

  return submission
}

module.exports = createSubmission
