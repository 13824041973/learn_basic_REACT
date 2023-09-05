import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
// import App from './css/01';
// import App from './less/index';
// import App from './03styled-components/index'
import App from './css/04classnames/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ size: 500, color: 'black' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);