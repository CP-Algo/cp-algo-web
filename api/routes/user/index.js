const { Router } = require('express')
const router = Router()

router.use('/basic', require('./basic'))

module.exports = router
