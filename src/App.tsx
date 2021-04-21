import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { RootStateType } from './redux/state'
import { addPost } from './redux/state'

type StateType = {
  state: RootStateType
}

function App(props: StateType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData} />} />
          <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData} addPost={addPost} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
