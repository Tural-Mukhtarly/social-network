import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { ActionTypes, RootStateType, StoreType } from './redux/store'

type StateType = {
  state: RootStateType
  store: StoreType
  dispatch: (action: ActionTypes) => void
}

function App(props: StateType) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">

        <Route path="/dialogs" render={() =>
          <DialogsContainer
            store={props.store}
          />}
        />

        <Route path="/profile" render={() =>
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            store={props.store} />}

        />
      </div>
    </div>
  );
}

export default App;
