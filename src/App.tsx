import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

// type StateType = {
//   store: StoreType
// }

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">

        <Route path="/dialogs" render={() => <DialogsContainer />}
        />

        <Route path="/profile" render={() => <Profile />} />
      </div>
    </div>
  );
}

export default App;
