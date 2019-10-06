import React from 'react';
import classes from './Message.module.css';

const Message=(props)=>(
      <div  className={classes.main}>
          <div className={classes.sender}>{props.sender}</div>
          <div className={classes.body}>{props.body}</div>
      </div>
       );

export default Message;