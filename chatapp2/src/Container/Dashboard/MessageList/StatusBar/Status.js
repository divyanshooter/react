import React from 'react';
import classes from './Status.module.css';
const status=(props)=>{
   
    return(
        <div className={classes.main}> 
             <p>{props.email}</p>
           { props.online==='false' ?  <p>Lastseen At:</p> : null }
            {props.online==='true' ? <p>Online</p> : null}
        </div> 
    );
}

export default status;