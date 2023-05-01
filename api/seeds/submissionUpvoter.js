const {
  models: { SubmissionUpvoter },
} = require('../models')

module.exports = {
  run: async () => {
    let submissionUpvoters = await SubmissionUpvoter.findAll()
    if (submissionUpvoters.length === 0) {
      submissionUpvoters = [
        {
          UserId: 'a3d368f7-95a0-4f5e-954a-1102a39beddc',
          SubmissionId: 1,
        },
      ]
      await SubmissionUpvoter.bulkCreate(submissionUpvoters)
    }
  },
}
