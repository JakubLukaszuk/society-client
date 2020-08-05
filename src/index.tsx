import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import {createBrowserHistory} from 'history'
import "./app/layout/index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import store from "./app/store";
import ScrollToTop from "./app/layout/ScrollToTop";

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
