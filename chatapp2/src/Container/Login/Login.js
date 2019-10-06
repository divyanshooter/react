import React,{Component} from 'react';
import classes from './Login.module.css';
import  {NavLink} from 'react-router-dom';
const firebase=require('firebase');

class Login extends Component
{
  state={
    email:'',
    password:'',
    loginerr:''
};
render()
 {
   return(
     <div className={classes.main}>
       <div className={classes.heading}>
         GuftGo
       </div>
      <form className={classes.form} >
           <div className={classes.container}>
             <label className={classes.label}>Email</label>
             <input className={classes.email} type="text" required onChange={(e)=>this.onChangeHandler(e,'email')}></input>
           </div>
           <div className={classes.container}>
            <label className={classes.label}>Password</label>
            <input className={classes.password} type="password" required onChange={(e)=>this.onChangeHandler(e,'password')}></input>
           </div>
           <div>
           {this.state.loginerr ? <div className={classes.error}>{this.state.loginerr}</div> : null}
           </div>
          <div >
          <button className={classes.login} type="submit" onClick={(e)=>this.submitForm(e)}>LOGIN IN</button>
          </div>
          <NavLink to='./signup' activeClassName={classes.link}>SignUp</NavLink>
         </form>
         
        </div>
     );
 }
 

 
 submitForm=(e)=>{
   e.preventDefault();
   console.log(this.state);

   if(this.state.password==='')
     {
         this.setState({loginerr:'Password Cannot Be Empty'});
     }
   else
   {
       firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{
           this.props.emailChangeHandler(this.state.email);
           this.props.history.push('/dashboard');
        },err=>{
          this.setState({loginerr:'Invalid UserName Or Password'});
          console.log(err);
        });
            
   }
  }
  onChangeHandler=(e,type)=>
  {
     switch(type)
     {
         case 'email':
            this.setState({email:e.target.value});
            break;
         case 'password':
           this.setState({password:e.target.value});
           break;
        default:
            break;
     }
   
  }
};

export default Login;