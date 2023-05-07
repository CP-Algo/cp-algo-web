const {
  models: { Language },
} = require('../models')

const languageMappings = require('../../config/judge0_mappings/language')

module.exports = {
  run: async () => {
    let languages = await Language.findAll()
    if (languages.length === 0) {
      await Language.bulkCreate(languageMappings.map(({ ace_id, ...rest }) => rest))
    }
  },
}
