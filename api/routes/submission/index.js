const { Router } = require('express')
const router = Router()

router.use('/submission/:submission', require('./get_basic'))
router.use('/submission/:submission', require('./get_tests'))
router.use('/submission', require('./post_new'))
router.use('/submission', require('./post_code'))

module.exports = router
