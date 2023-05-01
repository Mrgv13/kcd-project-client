import App from './App'

import store from './common/store'
import UserStore from './common/store/UserStore'

import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider
        value={{
          user: new UserStore(),
        }}>
        <App />
      </Context.Provider>
    </Provider>
  </React.StrictMode>,
)
