const { Router } = require('express')
const router = Router()

router.use('/codebook/:codebook', require('./get_index'))
router.use('/codebook', require('./post_name'))

module.exports = router
