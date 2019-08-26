import React from 'react';
import classes from './Logo.module.css';
import Clicker from '../../../assets/images/hourglass.jpg';


const Logo=()=>{
    return(
        
        <img className={classes.logo} src={Clicker} alt="Clicker"/> 
    );
}

export default Logo;