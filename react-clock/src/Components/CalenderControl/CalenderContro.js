import React from 'react';
import classes from './CalendarControl.module.css';
import calendar from '../../assets/images/calendar.png';

const calendarControl=(props)=>
{
    return(
        <div className={classes.container}>
            <button className={classes.button} onClick={props.clicked}>Show Date </button>
            <img className={classes.img}  src={calendar} alt="calendar"></img>
            
        </div>
    );
}

export default calendarControl;