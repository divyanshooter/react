import React,{Component} from 'react';
import classes from './SignUP.module.css';
const firebase=require('firebase');
class Signup extends Component
{
 state={
     email:'',
     password:'',
     confmpassword:'',
     signinerr:''
 };
 render()
  {
    return(
        <div className={classes.main}>
            <div className={classes.heading}>
               GuftGo
            </div>

            <form className={classes.form}>
               <div className={classes.container}>
                  <label className={classes.label}>Email</label>
                  <input  className={classes.email} type="text" require onChange={(e)=>this.onChangeHandler(e,'email')}></input>
                </div>

               <div className={classes.container}>
                  <label className={classes.label}>Password</label>
                  <input className={classes.password} type="password" required onChange={(e)=>this.onChangeHandler(e,'password')}></input>
               </div>
               <div className={classes.container}>
                  <label className={classes.label}>Confirm Password</label>
                  <input className={classes.confmpass} type="password" required onChange={(e)=>this.onChangeHandler(e,'confmpassword')}></input>
               </div> 
              {this.state.signinerr ? <div className={classes.error}>{this.state.signinerr}</div> : null}
              <button className={classes.signup}type="submit" onClick={(e)=>this.submitForm(e)}>Sign Up</button>
              <a href='/login' className={classes.link} >Log In</a>
            </form>
        </div>
      );
  }
  

  
  submitForm=(e)=>{
    e.preventDefault();

    if(this.state.password!==this.state.confmpassword)
      {
          this.setState({signinerr:'Password Does Not Match'});
      }
    else
    {
        firebase
         .auth()
         .createUserWithEmailAndPassword(this.state.email,this.state.password)
         .then(res=>{
             const userob={
                 email:res.user.email,
             };
            firebase
               .firestore()
               .collection('users')
               .doc(this.state.email)
               .set(userob)
               .then(()=>{
                   this.props.emailChangeHandler(this.state.email);
                   this.props.history.push('/dashboard');
               },
               err=>{
                this.setState({signinerr:"Can'T Create User"});
                console.log(err);
            })
         }
        
        ,err=>{
            this.setState({signinerr:"Cannot Able To Authorise"});
            console.log(err);
         })
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
         case'confmpassword':
          this.setState({confmpassword:e.target.value});
          break;
         default:
             break;
      }
    
   }

};

export default Signup;