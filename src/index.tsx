import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/scss/index.scss'
import { store } from './store/store'
import { Provider } from 'react-redux'
let el = document.getElementById('root')
if (el) {
  let root = createRoot(el)
  root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>) 
}

