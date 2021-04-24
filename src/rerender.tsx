import React from 'react'
import App from './App';
import ReactDOM from 'react-dom';
import  store  from './redux/state'
import { BrowserRouter } from 'react-router-dom';

export const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender()