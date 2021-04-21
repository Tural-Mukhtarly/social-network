import React from 'react'
import App from './App';
import ReactDOM from 'react-dom';
import { RootStateType } from './redux/state'

export const rerender = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerender
