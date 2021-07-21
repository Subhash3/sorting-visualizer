import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === "production") {
  console.log = () => { }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // eslint-disable-next-line no-extend-native
// Array.prototype.swap = function (x, y) {
//   var b = this[x];
//   this[x] = this[y];
//   this[y] = b;
//   return this;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
