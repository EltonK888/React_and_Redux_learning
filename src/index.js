import React from 'react'
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { createStore } from "redux";
import reducers from "./reducers/allReducers";
import { Provider } from "react-redux";
import Container from "./containers/container"

const initialState = {
    items: [],
    valueHeader: "",
    valueText: ""
}
const store = createStore(reducers, initialState);


ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>, document.getElementById("root"));
