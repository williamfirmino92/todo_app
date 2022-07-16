import React from 'react';
import ReactDOM from 'react-dom';
import TodoProvider from './contexts/TodoContext';
import App from './main/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);

reportWebVitals();
