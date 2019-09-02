import React from 'react';
import Message from './Message/Message';
import classes from './Messages.module.css';

const messageList=(props)=>{
    const classArray=[props.toadd,classes.main].join(' ');
    const message=[{
       sender:'Divyanshu',
       body:'Hi,Welcome To my app.' 
    },
    {
        sender:'Chirag',
        body:'Hi,I am Chirag.' 
     },
     {
        sender:'Priyanshu',
        body:'I am Priyanshu.' 
     },
];
const messageD=message.map((cur,i)=>{
    return(
         <div>
             <Message sender={cur.sender} body={cur.body}/>
        </div>
    );
});
  
    return(
    
      <div className={classArray}>
          {messageD}
      </div>
    );
}

export default messageList;