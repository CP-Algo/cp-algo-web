const {
  models: { Language },
} = require('../models')

module.exports = {
  run: async () => {
    let languages = await Language.findAll()
    if (languages.length === 0) {
      languages = [
        {
          id: 'CPP_11',
          name: 'C++ 11',
        },
        {
          id: 'PY_2',
          name: 'Python 2',
        },
      ]
      await Language.bulkCreate(languages)
    }
  },
}
