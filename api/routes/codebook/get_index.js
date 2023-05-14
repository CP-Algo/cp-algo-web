const { Router } = require('express')
const router = Router({ mergeParams: true })

const { Op } = require('sequelize')
const {
  models: { Codebook, Submission },
} = require('../../models')

router.get('/', async function (req, res, next) {
  try {
    const codebookId = req.params.codebook
    const codebookModel = await Codebook.findByPk(codebookId, {
      include: {
        model: Submission,
        include: ['Authors', 'Language']
      }
    })
    const codebook = { ...codebookModel.get({ plain: true }) }
    return res.json(codebook)
  } catch (err) {
    next(err)
  }
})

module.exports = router
