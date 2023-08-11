const updateUsingDebounce = debounce(() => {
  const debounce = document.querySelector('#debounce_times')
  debounce.innerHTML = (parseInt(debounce.innerHTML) || 0) + 1
})

const updateUsingThrottle = throttle(() => {
  const throttle = document.querySelector('#throttle_times')
  throttle.innerHTML = (parseInt(throttle.innerHTML) || 0) + 1
})

window.addEventListener('mousemove', _e => {
  const defaultTime = document.querySelector('#default_times')

  defaultTime.innerHTML = (parseInt(defaultTime.innerHTML) || 0) + 1
  updateUsingDebounce()
  updateUsingThrottle()
})

/*
Debounce is a technique that is used to control how often a function is called.
when a certain event is triggered.
-- Debounce -- works by delaying the execution until
after the event has stopped firing for a specified amount of time.
*/

function debounce (cb, delay = 1000) {
  // by doing this we take advantage of closure and the timeOut variable will be remembered
  // and with clearTimeout we prevent to execute the callback.
  let timeOut

  return (...args) => {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      cb(...args)
    }, delay)
  }
}

/*
Throttle is a technique that controls the rate at which a function is executed.
ensuring the function is executed at regular intervals.
*/
function throttle (cb, delay = 1000) {
  let shouldWait = false

  return (...args) => {
    if (shouldWait) return
    // eslint-disable-next-line n/no-callback-literal
    cb(...args)
    shouldWait = true
    setTimeout(() => {
      shouldWait = false
    }
    , delay)
  }
}

/*
Conclusion Debounce vs Throttle

Throttle limits the frequency of function calls to a certain rate,
preventing the function from being invoked more frequently than the specified interval.
On the other hand, debounce delays the execution of a function until a certain period of inactivity
has passed after the last event, helping to prevent multiple rapid function calls.
*/
