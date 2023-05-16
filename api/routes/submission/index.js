const { Router } = require('express')
const router = Router()

router.use('/submission/:submission', require('./get_basic'))
router.use('/submission/:submission', require('./get_tests'))
router.use('/submission', require('./post_code'))
router.use('/submission', require('./post_upvote'))
// router.use('/submission', require('./post_fork'))
router.use('/submission', require('./post_run'))
router.use('/submission', require('./post_index'))

module.exports = router
