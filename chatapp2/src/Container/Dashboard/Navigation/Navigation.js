import React,{Component} from 'react';
import classes from './Navigation.module.css';

class Navigation extends Component
 {
   state={
     toggle:false
   }
  render()
  {
    let menuClass=classes.menu;
    if(this.state.toggle)
    {
      menuClass=(classes.menu+' '+classes.menuToggle);
    }
    return(
      <div className={classes.navigation}>
       <div>
        <div className={classes.navigationBrand}>Gu<span className={classes.navigationBrandSub}>ft</span>Go</div>
        <div className={classes.navigationUser}>{this.props.email}</div>
       </div>
       <div className={classes.container}>
         <div onClick={this.toggle}>
           <div className={classes.humburger}></div>
           <div className={classes.humburger}></div>
           <div className={classes.humburger}></div>
       </div>
      <div className={menuClass}>
        <ul>
          <li>New Contact</li>
          <li>Profile</li>
          <li>Settings</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
      </div>
     
    </div>
    )
  }
     
  toggle=()=>{
    let tog=!this.state.toggle;
    this.setState({toggle:tog})
  }
    
};

export default Navigation;
