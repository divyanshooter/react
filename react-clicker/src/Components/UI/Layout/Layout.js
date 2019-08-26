import React from 'react';
import classes from 'Layout.css';
const layout =(props)=>{
  
    return(
    <div>
        <nav className={classes.nav}>

        </nav>
        {props.children}
    </div>
    );
}

export default layout;