const { Router } = require('express')
const router = Router()

module.exports = function (passport) {
  router.use('/login', require('./login')(passport))
  router.use('/signup', require('./signup')(passport))
  router.use('/verify', require('./verify'))
  router.use('/forgot', require('./forgot'))
  router.use('/reset', require('./reset'))

  return router
}
