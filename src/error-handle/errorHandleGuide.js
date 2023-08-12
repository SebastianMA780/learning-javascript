// errors.js

/*
it is best to create a custom error
that gives more information about the error and this way
we can also check the type of error with a strong contract
*/
export class ConnectionError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ConnectionError'
  }
}

export class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ValidationError'
  }
}

// validation.js
export const validateUser = (user) => {
  if (!user.name) {
    throw new ValidationError('name is required')
  }

  if (!user.password) {
    throw new ValidationError('password is required')
  }

  if (!user.email) {
    throw new ValidationError('email is required')
  }
}

// ui.js
const name = 'Devon'
const password = '123456'
const email = ''

try {
  validateUser({ name, password, email })
} catch (error) {
  // this way we can properly handle the error based on the type.
  if (error instanceof ValidationError) {
    // console.error would be valid if the code is running in the server
    // but if is running in the server we should not leak too much information
    // it could be a security issue
    console.error(error.message)
  }
}
