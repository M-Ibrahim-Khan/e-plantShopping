import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App with Redux Provider to give access to the global store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
