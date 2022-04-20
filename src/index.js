import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { allowedIp, checkMyIp } from './app/api';



if (window.operationMode === 'production') {
  window.logout = console.log
  console.log = function () { }
} else if (window.operationMode === 'test') {
  window.checkMyIp = function ({ callback }) {
    checkMyIp({
      callback: (err, myIp) => {
        if (err) {
          callback(err)
        } else {
          allowedIp({
            ip: myIp,
            callback: (err, res) => {
              if (err) {
                callback(err)
              } else {
                callback(undefined, { whiteList: res.whiteList })
              }
            }
          })
        }
      }
    })
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback={<></>}>
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
