import actions from '../actions/counter'

export default function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case actions.INCREASE.type:
      return { count: count + 1 }
    case actions.DECREASE.type:
      return { count: count - 1 }
    default:
      return state
  }
}