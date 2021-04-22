import React from 'react'
import App from './App';
import ReactDOM from 'react-dom';
import { state } from './redux/state'
import { BrowserRouter } from 'react-router-dom';

export const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender()