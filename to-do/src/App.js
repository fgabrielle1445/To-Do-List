import React from "react";
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import "./App.css";
import TextField from '@material-ui/core/TextField';

// Enter into task form
function Task({ task, index, completeTask, removeTask }) {
  
  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      {task.text}
      <div>
        <FaCheckCircle 
                    style={{color: 'coral', cursor: 'pointer'}} onClick={() => completeTask(index)}
                />
        <FaTimes 
                    style={{color: 'coral', cursor: 'pointer', marginLeft: '20px'}}
                    onClick={() => removeTask(index)} 
                />
      </div>
    </div>
  );
}

// Add task
function AddTasks({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      alert("Please enter a task!");
      return;
    }
    addTask(value);
    setValue("");
  };

  // Need to override the textfield's color and make it coral to match my theme
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Enter task here..." variant="outlined"
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Test Task #1",
      isCompleted: false
    },
    {
      text: "Test Task #2",
      isCompleted: false
    },
    {
      text: "Test Task #3",
      isCompleted: false
    }
  ]);

// Add Task
  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  // For marking through completed but not deleted tasks
  const completeTask = ((index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !(newTasks[index].isCompleted);
    setTasks(newTasks);
  });

// Delete Task
  const removeTask = ((index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  });

  return (
    <div className="app">
      <div className="tasks">
        <div className="header">
          <h1>To-Do</h1>
        </div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
        <AddTasks addTask={addTask} />
      </div>
    </div>
  );
}

export default App;