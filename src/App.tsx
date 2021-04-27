import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { StoreType } from './redux/store'

type StateType = {
  store: StoreType
}

function App(props: StateType) {
  const state = props.store.getState()
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">

        <Route path="/dialogs" render={() =>
          <Dialogs
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            newMessageBody={state.dialogsPage.newMessageBody}
            dispatch={props.store.dispatch.bind(props.store)}
          />}
        />

        <Route path="/profile" render={() =>
          <Profile
            postData={state.profilePage.postData}
            addPost={props.store.addPost.bind(props.store)}
            changeNewTextCallback={props.store.changeNewText.bind(props.store)}
            message={state.profilePage.newPostText}
            dispatch={props.store.dispatch.bind(props.store)} />}
        />
      </div>
    </div>
  );
}

export default App;
