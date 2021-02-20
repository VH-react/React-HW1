import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./Routes";

const store = createStore();

store.subscribe(() => {
    localStorage.setItem('products', JSON.stringify(store.getState().cart));
})

export default function Shop() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
