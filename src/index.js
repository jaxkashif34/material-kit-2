import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeConfig from './assets/theme';
import ContextProvider from 'context';
import PerFectScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeConfig>
        <PerFectScrollBar>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PerFectScrollBar>
      </ThemeConfig>
    </ContextProvider>
  </React.StrictMode>
);
