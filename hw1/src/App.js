import React from 'react';
import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <h1>Добро пожаловать в React app!</h1>
      <Message text="Привет! Это первое сообщение на React" />
      <Message text="Двигаемся дальше!" />
    </div>
  );
}

export default App;
