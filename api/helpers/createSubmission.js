const {
  models: { Submission, SubmissionAuthor },
} = require('../models')
const runTests = require('./runTests')

async function createSubmission(authorID, data) {
  const { id, algorithm, language, timeComplexity, memoryComplexity, code } = data
  const submission = id ?
    (await Submission.update({
      timeComplexity,
      memoryComplexity,
      code,
      length: code.length,
      CodebookId: authorID,
      AlgorithmId: algorithm,
      LanguageId: language,
    }, {
      where: { id },
      returning: true,
      raw: true,
    }))[1][0] :
    await Submission.create({
      timeComplexity,
      memoryComplexity,
      code,
      length: code.length,
      CodebookId: authorID,
      AlgorithmId: algorithm,
      LanguageId: language,
    })

  if (!id) {
    await SubmissionAuthor.create({
      UserId: authorID,
      SubmissionId: submission.id,
    })
  }

  runTests(submission.id)

  return submission
}

module.exports = createSubmission
