// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
};

export default App;
