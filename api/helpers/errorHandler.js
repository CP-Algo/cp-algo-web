const { ValidationError } = require('sequelize')
const UserError = require('./UserError')
const errorHandler = require('express-error-handler')

function initializeErrorHandler(app) {
  const handler = errorHandler({
    server: app,
    handlers: {},
  })

  app.use(errorHandler.httpError(404))
  app.use(function (err, _req, _res, next) {
    if (err instanceof ValidationError) {
      err.status = 400
      err.message = err.errors[0].message
    }
    if (err instanceof UserError) {
      err.status = 400
    }
    console.log(err);
    next(err)
  })
  app.use(handler)
}

function asyncRouteWrapper(asyncRouteHandler) {
  return function routeHandler(request, response, next) {
    return asyncRouteHandler(request, response, next).catch(next)
  }
}

module.exports = { initializeErrorHandler, asyncRouteWrapper }
