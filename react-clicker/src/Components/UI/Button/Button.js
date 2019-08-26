import React from 'react';
import classes from './Button.module.css';

const button=(props) =>{
    let list=[classes.button];
    let text;
    if(props.type==="add")
    {
        list.push(classes.plus);
        text="+"
    }
    else if(props.type==="minus")
    {
        list.push(classes.minus);
        text="-";
    }
    else
    {
        list.push(classes.restart);
        text="&"
    }
   list=list.join(' ');

   return(
       <button className={list} onClick={props.clicked}>{text}</button>

   )
}
export default button;