const createStore = require("./createStore")

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {...state, counter: state.counter + 1}
    }
    case DECREMENT: {
      return {...state, counter: state.counter - 1}
    }
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log("from the first subscribe", store.getState())
})

const cancelSub = store.subscribe(() => {
  console.log("from the second subscribe", store.getState())
})


store.dispatch({type: INCREMENT, double: true})
store.dispatch({type: INCREMENT})
cancelSub()
store.dispatch({type: DECREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
