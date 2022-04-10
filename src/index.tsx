import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


let el = document.getElementById('root')
if (el) {
  let root = createRoot(el)
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>)
    
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
