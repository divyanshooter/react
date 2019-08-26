import React from 'react';
import classes from './Clock.module.css';

const Clock=(props)=>{
    return (
        <div className={classes.main}>
            <div className={classes.outer}>
                <div className={classes.inner}>
                    <span className={classes.text}>{props.time}</span>
                 
                </div>
            </div>
        </div>
    );
}

export default Clock;