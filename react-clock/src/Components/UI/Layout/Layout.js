import React from 'react';
import classes from './Layout.module.css';
import Logo from '../Logo/Logo';
const layout =(props)=>{
  
    return(
    <div>
        <nav className={classes.nav}>
            <Logo />
           React Clock
        </nav>
        {props.children}
    </div>
    );
}

export default layout;