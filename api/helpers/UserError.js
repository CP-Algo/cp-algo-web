class UserError extends Error {  
  constructor (message) {
    super(message)

    // assigning the error class name in the custom error (as a shortcut)
    this.name = this.constructor.name

    // capturing the stack trace keeps the reference in the error class
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UserError
