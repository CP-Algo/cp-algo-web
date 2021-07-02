const {
  models: { SubmissionUpvoter },
} = require('../models')

module.exports = {
  run: async () => {
    let submissionUpvoters = await SubmissionUpvoter.findAll()
    if (submissionUpvoters.length === 0) {
      submissionUpvoters = [
        {
          UserId: '75e851c1-acc6-46ea-969a-f28829a1de44',
          SubmissionId: 1,
        },
      ]
      await SubmissionUpvoter.bulkCreate(submissionUpvoters)
    }
  },
}
