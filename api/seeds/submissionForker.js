const {
  models: { SubmissionForker },
} = require('../models')

module.exports = {
  run: async () => {
    let submissionForkers = await SubmissionForker.findAll()
    if (submissionForkers.length === 0) {
      submissionForkers = [
        {
          UserId: '75e851c1-acc6-46ea-969a-f28829a1de44',
          SubmissionId: 1,
        },
      ]
      await SubmissionForker.bulkCreate(submissionForkers)
    }
  },
}
