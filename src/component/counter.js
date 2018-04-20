import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import action from '../actions/counter'
// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick} style={{marginRight: '30px', marginLeft: '30px'}}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(action.INCREASE),
    onDecreaseClick: () => dispatch(action.DECREASE)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)