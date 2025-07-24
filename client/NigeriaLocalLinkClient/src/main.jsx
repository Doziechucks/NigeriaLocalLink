import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true,       // Opt-in to new transition behavior
          v7_relativeSplatPath: true      // Opt-in to new relative path behavior
        }}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);