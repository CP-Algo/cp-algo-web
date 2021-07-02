const { env } = require('../../config')
const orderedFiles = [
  'topics',
  'language',
  'user',
  'handle',
  'submission',
  'submissionAuthor',
  'test',
  'testResult',
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
