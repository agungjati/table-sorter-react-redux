import React from 'react'
import { render } from 'react-dom'
import AppContainer from './components/AppContainer'
import  myReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(myReducer)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
