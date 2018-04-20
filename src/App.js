import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Counter from './component/counter'
import store from './store'

class App extends Component {
  render() {
    return(
      <Provider 
        store={store}
      >
      <div style={styles.wrapper}>
        这是一个Counter的例子：
        <Counter />
      </div>
    </Provider>
    )
  }
}
const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export default App