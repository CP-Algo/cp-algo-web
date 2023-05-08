const {
  models: { Language },
} = require('../models')

const languages = require('../../config/judge0_mappings/language')

module.exports = {
  run: async () => {
    let languageModels = await Language.findAll()
    if (languageModels.length === 0) {
      await Language.bulkCreate(languages)
    }
  },
}
