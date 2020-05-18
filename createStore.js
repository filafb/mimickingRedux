const createStore = reducer => {
  let currentState = reducer(undefined, {})
  let subscriptions = []

  function dispatch(obj={}) {
    currentState = reducer(currentState, obj)
    subscriptions.forEach(fn => fn())
  }

  function getState() {
    return currentState
  }

  function subscribe(fn) {
    subscriptions.push(fn)
    const unsubscribe = () => {
      subscriptions = subscriptions.filter(f => f !== fn)
    }
    return unsubscribe
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

module.exports = createStore
