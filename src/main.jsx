import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Redux imports
import { Provider } from 'react-redux';
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig.js';
import AppReduxSaga from './AppReduxSaga';

// App Store
//let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore()


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/*<App />*/}
      <AppReduxSaga/>
    </React.StrictMode>
  </Provider>
)
