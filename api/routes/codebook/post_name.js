const { Router } = require('express')
const router = Router()

const {
  models: { Codebook },
} = require('../../models')
const {
  authenticatedMiddleware,
} = require('../../helpers/authenticatedMiddleware')

router.post('/name', authenticatedMiddleware, async function (req, res, next) {
  try {
    const userID = req.user.id
    const { codebook: codebookID, name } = req.body

    const codebook = await Codebook.findByPk(codebookID)
    const author = await codebook.getUser()

    if (userID !== author.id)
      throw new Error('You are not authorized to update the codebook')

    await codebook.update({ name })

    return res.json({ message: 'Codebook name updated successfully!' })
  } catch (err) {
    next(err)
  }
})

module.exports = router
