import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import App from "./components/App";
import "./index.css";
import { persistor, store } from './redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
