import React from 'react';
import classes from './Clock.module.css';

const Clock=(props)=>{
    let day=['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
    let Month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
    let time=(props.date.getHours()==0 ? '00' : props.date.getHours())+':'+props.date.getMinutes()+':'+props.date.getSeconds();
    let date=day[props.date.getDay()]+ ' ' +props.date.getDate()+ ' ' +Month[props.date.getMonth()]+ ' ' +props.date.getFullYear();
    return (
        <div className={classes.main}>
            <div className={classes.outer}>
                <div className={classes.inner}>
                    <span className={classes.text}>{time}</span>
                   {props.visible ? <span className={classes.date}>{date}</span>:null} 
                 
                </div>
            </div>
        </div>
    );
}

export default Clock;