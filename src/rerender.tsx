import React from 'react'
import App from './App';
import ReactDOM from 'react-dom';
import { state } from './redux/state'

export const rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
