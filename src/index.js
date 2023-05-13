import App from './App'

import store from './common/store'
import UserStore from './common/store/UserStore'
import ProjectStore from './common/store/ProjectStore'
import WorksStore from './common/store/WorksStore'

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
          projects: new ProjectStore(),
          works: new WorksStore(),
        }}>
        <App />
      </Context.Provider>
    </Provider>
  </React.StrictMode>,
)
