// Magic string is 'error' used hard-coded in the function printMessage, this is not reusable and not easy to change.
// instead you should use different strategy like enum or object.

export const MESSAGE_TYPE = Object.freeze({ // freeze to make sure no one can change the value
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
})

function printMessage (message) {
  if (message === 'error') {
    console.log('Error')
  } else if (message === MESSAGE_TYPE.WARNING) {
    console.log('Warning')
  } else if (message === MESSAGE_TYPE.SUCCESS) {
    console.log('Success')
  } else {
    console.log('Unknown message')
  }
}

printMessage('error') // this could lead to error if you misspell the string or it changes in the future.
printMessage(MESSAGE_TYPE.ERROR) // this is more readable and less error prone.
