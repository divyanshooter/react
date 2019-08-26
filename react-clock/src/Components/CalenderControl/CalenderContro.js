import React from 'react';
import classes from './CalendarControl.module.css';
import calendar from '../../assets/images/calendar.png';

const calendarControl=(props)=>
{
    let stylesList=[classes.button];
    if(props.visible)
     {
         stylesList.push(classes.on);
     }
    else
    {
        stylesList.push(classes.off);
    }
    stylesList=stylesList.join(' ');
    return(
        <div className={classes.container}>
            <button className={stylesList} onClick={props.clicked}>Show Date </button>
            <img className={classes.img}  src={calendar} alt="calendar"></img>
            
        </div>
    );
}

export default calendarControl;