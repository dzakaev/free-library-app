import React from "react";
import App from "./components/App";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';


render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
