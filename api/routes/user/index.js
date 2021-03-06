const { Router } = require('express')
const router = Router()

router.use('/user', require('./get_me'))
router.use('/user/:user', require('./get_basic'))
router.use('/user/', require('./post_basic'))
router.use('/user/:user', require('./get_handles'))
router.use('/user', require('./post_handles'))
router.use('/user', require('./post_security'))

module.exports = router
