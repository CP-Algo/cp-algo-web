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

  // Handle errors
  router.use(function (err, _req, res, _next) {
    // eslint-disable-next-line no-console
    console.log('Fallback error:', err)
    res.status(err.status || 500)
    res.json({ error: err.message || err })
  })

  return router
}
