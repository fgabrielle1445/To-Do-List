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

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.get('/api/tasks', (req, res) => {
  res.send(tasks);
})

app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('The task with the given ID was not found.')
  res.send(task);
});

app.put('/api/tasks/:id', (req, res) => {
  // Look up the course
  // If not existing, return 404
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('The task with the given ID was not found.')

  // Validate
  // If invalid, return 400
  const { error } = validateCourse(req.body);

  if (error){
      // 400 Bad Request
      return res.status(400).send(error.details[0].message);
  }

  // Update course
  task.text = req.body.text;
  // Return the updated course
  res.send(task);

});


app.delete('/api/tasks/:id', (req, res) => {
  // Look up the course
  // Not existing, return 404
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('The task with the given ID was not found.')


  // Delete
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  
  // Return the same task
  res.send(task);
})

function validateCourse(task){
  const schema = {
      text: Joi.string().min(1).required()
  }

  return Joi.validate(task, schema);

}
