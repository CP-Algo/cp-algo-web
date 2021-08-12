const errorHandler = require('express-error-handler')

function initializeErrorHandler(app) {
  const handler = errorHandler({
    server: app,
    handlers: {},
  })

  app.use(errorHandler.httpError(404))
  app.use(handler)
}

function asyncRouteWrapper(asyncRouteHandler) {
  return function routeHandler(request, response, next) {
    return asyncRouteHandler(request, response, next).catch(next)
  }
}

module.exports = { initializeErrorHandler, asyncRouteWrapper }
