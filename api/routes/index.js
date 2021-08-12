const { Router } = require('express')
const router = Router()

module.exports = function (passport) {
  router.use('/', require('./auth')(passport))
  router.use('/', require('./user'))
  router.use('/', require('./topics'))
  router.use('/', require('./language'))
  router.use('/', require('./submission'))
  router.use('/', require('./contributors'))
  router.use('/', require('./submissions'))
  router.use('/', require('./codebook'))

  return router
}
