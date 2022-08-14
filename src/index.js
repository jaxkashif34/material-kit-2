import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import ThemeConfig from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeConfig>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeConfig>
  </React.StrictMode>
);
