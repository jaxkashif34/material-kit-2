import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from 'context';
import ThemeConfig from 'assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </ContextProvider>
  </React.StrictMode>
);
