import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Adding the CRUD commands here
const tasks = [
  {
    id: '1',
    text: 'Test Task #1',
    isCompleted: false
  },
  {
    id: '2',
    text: 'Test Task #2',
    isCompleted: false
  },
  {
    id: '3',
    text: 'Test Task #3',
    isCompleted: false
  }
]
