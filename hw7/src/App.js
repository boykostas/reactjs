// src/App.js
import React from 'react';
import './App.css';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
        <TasksList />
      </header>
    </div>
  );
}

export default App;
