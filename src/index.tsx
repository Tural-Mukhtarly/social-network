import './index.css';
import reportWebVitals from './reportWebVitals';
import { subscribe } from './redux/state'
import { rerender } from './rerender';



// rerender(state)

subscribe(rerender)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
