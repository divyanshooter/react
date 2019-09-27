import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Signup from './Container/SignUp/Signup';
import Login from'./Container/Login/Login';
import DashBoard from './Container/Dashboard/Dashboard';
const firebase=require('firebase');
require('firebase/firestore');

function App() {
  return (
    <div>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/dashboard' component={DashBoard}></Route>

    </div>
  );
}

export default App;
