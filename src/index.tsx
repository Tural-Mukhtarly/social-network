import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store, { RootStateType } from './redux/store';
import reportWebVitals from './reportWebVitals';


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            {/* <Provider store={store}> */}
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            {/* </Provider> */}
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())


store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
