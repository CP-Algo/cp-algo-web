const { env } = require('../../config')
const orderedFiles = [
  'category',
  'subCategory',
  'algorithm',
  'algorithmExample',
  'language',
  'user',
  'handle',
  'submission',
  'submissionAuthor',
  'test',
  'testResult',
  'verification',
]

if (env !== 'production') {
  ;(async () => {
    for (file of orderedFiles) {
      await require(`./${file}`).run()
    }
    // eslint-disable-next-line no-console
    console.log('Seeds generated for sequelize models')
  })()
}
