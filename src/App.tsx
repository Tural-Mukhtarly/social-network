import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DeleteComponent from './DeleteComponent';


function App() {
  return (
    <div className="app-wrapper">
     <Header/>
     <Profile/>
     <Navbar/>
     <DeleteComponent/>
    </div>
  );
}

export default App;
