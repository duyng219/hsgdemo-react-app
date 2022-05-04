import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import history from "./history";
import App from "./App";
import "./index.css";
import "./sass/index.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
