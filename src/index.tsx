import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type DialogsType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}

export type PostDataType = {
  id: number
  post: string
  likesCount: number
}

const postData: Array<PostDataType> = [
  { id: 1, post: 'post', likesCount: 11 },
  { id: 2, post: 'post', likesCount: 12 },
  { id: 3, post: 'post', likesCount: 13 }
]

const dialogsData: Array<DialogsType> = [
  { id: 1, name: "Tural" },
  { id: 2, name: "Rahib" },
  { id: 3, name: "Meherrem" },
  { id: 4, name: "Emil" },
  { id: 5, name: "Seymur" },
]

const messagesData: Array<MessageType> = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Where are you from?" },
  { id: 4, message: "Where is your cat?" },
  { id: 5, message: "Your cat is so sweet" },
]


ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
