import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { StoreType } from './redux/state'

type StateType = {
  store: StoreType
}

function App(props: StateType) {
  const state = props.store.getState()
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData} />} />
          <Route path="/profile" render={() => <Profile postData={state.profilePage.postData} addPost={props.store.addPost.bind(props.store)} changeNewTextCallback ={props.store.changeNewText.bind(props.store)} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
