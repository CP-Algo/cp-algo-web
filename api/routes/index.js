const { Router } = require('express')
const router = Router()

module.exports = function (passport) {
  router.use('/auth', require('./auth')(passport))
  router.use('/user', require('./user'))

  // Handle errors.
  router.use(function (err, _req, res, _next) {
    // eslint-disable-next-line no-console
    console.log('Fallback error', err)
    res.status(err.status || 500)
    res.json({ error: err })
  })

  return router
}
