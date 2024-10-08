import React from 'react';
import './App.css';
import TodoList from './TodoList';
// import TemperatureConverter from './TemperatureConverter';


function App() {
  return (
    // <div className="App">
    //   <h1>Конвертер температуры</h1>
    //   <TemperatureConverter />
    // </div>

  <div className="App">
    <h1>Список дел</h1>
    <TodoList />
  </div>
  );
}

export default App;
