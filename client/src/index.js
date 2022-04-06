import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import blogsReducer from './reducers/blogsReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  blogs: blogsReducer
})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
