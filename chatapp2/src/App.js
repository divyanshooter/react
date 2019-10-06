import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import './App.css';
import {Route} from 'react-router-dom';
import Signup from './Container/SignUp/Signup';
import Login from'./Container/Login/Login';
import DashBoard from './Container/Dashboard/Dashboard';
const firebase=require('firebase');
require('firebase/firestore');


class App extends Component {
  state={
    email:''
  }
  render()
  {
    return (
      <div>
        <Route path='/signup' render={(props)=><Signup {...props} emailChangeHandler={this.emailChangeHandler}/>}></Route>
        <Route path='/login' render={(props)=><Login {...props} emailChangeHandler={this.emailChangeHandler}/>}></Route>
        {this.state.email!=='' ? <Route path='/dashboard' render={(props)=><DashBoard {...props} clearEmailHandler={this.clearEmailHandler}/>}></Route> :null}
        
        <Redirect to='/login'/>
      </div>
    );
  }
  emailChangeHandler=(email)=>{
    this.setState({email:email});
  }
  clearEmailHandler=()=>{
    this.setState({email:''});
  }

}

export default App;
