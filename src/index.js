import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

// integrating redux

import storeFactory from "./redux/store/";
import { Provider } from "react-redux";
import sampleData from "./redux/initialState.json";
import { addError } from "./redux/actions";

// seeding redux data

const initialState = localStorage["my-store"]
  ? JSON.parse(localStorage["my-store"])
  : sampleData;

const saveState = () =>
  (localStorage["my-store"] = JSON.stringify(store.getState()));

const handleError = (error) => {
  store.dispatch(addError(error.message));
};

const store = storeFactory(initialState);
store.subscribe(saveState);

window.React = React;
window.store = store;

window.addEventListener("error", handleError);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
