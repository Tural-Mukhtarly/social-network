import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import UserContainer from './components/Users/UserContainer';


function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">

        <Route path="/dialogs" render={() => <DialogsContainer />}
        />

        <Route path="/profile" render={() => <Profile />} />
        <Route path="/users" render={() => <UserContainer />} />
      </div>
    </div>
  );
}

export default App;
