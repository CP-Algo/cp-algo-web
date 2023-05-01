const {
  models: { Submission, SubmissionAuthor },
} = require('../models')
const runTests = require('./runTests')

async function createSubmission(authorID, data, forkFrom) {
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

  if (forkFrom) {
    await submission.setParent(await Submission.findByPk(forkFrom))
    await (await submission.getParent()).setChild(submission)
  }

  runTests(submission.id)

  return submission
}

module.exports = createSubmission
