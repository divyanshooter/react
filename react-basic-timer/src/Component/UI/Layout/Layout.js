import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Layout.module.css';
const layout =(props)=>{
  
    return(
    <div>
        <nav className={classes.nav}>
            <Logo />
           React Basic Timer
        </nav>
        {props.children}
    </div>
    );
}

export default layout;