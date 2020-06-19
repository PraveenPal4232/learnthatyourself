// import C from "../constants";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const consoleMessages = (store) => (next) => (action) => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log("number of products", store.getState().allProducts.length);
  result = next(action);

  console.groupEnd();

  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(
    appReducer,
    initialState,
    composeWithDevTools()
  );
};
