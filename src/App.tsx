import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { PostDataType, DialogsType, MessageType } from './index'

type AppTypes = {
  postData: Array<PostDataType>
  dialogsData: Array<DialogsType>
  messagesData: Array<MessageType>
}

function App(props: AppTypes) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
          <Route path="/profile" render={() => <Profile postData={props.postData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
