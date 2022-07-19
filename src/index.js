import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/scss/black-dashboard-react.scss";
import "./assets/css/nucleo-icons.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import DataProvider from './redux/store'
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";


ReactDOM.render(
  <React.StrictMode>
    <ThemeContextWrapper>
    <BackgroundColorWrapper>
    <DataProvider>
      <App />
    </DataProvider>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
