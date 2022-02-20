import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { userReducer } from './components/Features/user';
import { themesReducer } from './components/Features/themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
  }
`

const store = configureStore({
  reducer: {
    user: userReducer,
    themes: themesReducer,
  },
})
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

