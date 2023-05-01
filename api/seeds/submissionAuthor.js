const {
  models: { SubmissionAuthor },
} = require('../models')

module.exports = {
  run: async () => {
    let submissionAuthors = await SubmissionAuthor.findAll()
    if (submissionAuthors.length === 0) {
      submissionAuthors = [
        {
          UserId: '75e851c1-acc6-46ea-969a-f28829a1de44',
          SubmissionId: 1,
        },
        {
          UserId: '75e851c1-acc6-46ea-969a-f28829a1de44',
          SubmissionId: 2,
        },
      ]
      await SubmissionAuthor.bulkCreate(submissionAuthors)
    }
  },
}
