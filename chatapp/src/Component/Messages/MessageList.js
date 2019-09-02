import React from 'react';
import Message from './Message/Message';
import classes from './Messages.module.css';

const messageList=(props)=>{
    const classArray=[props.toadd,classes.main].join(' ');
    // const message=[{
    //    sender:'Divyanshu',
    //    body:'Hi,Welcome To my app.' 
    // },
    // {
    //     sender:'Chirag',
    //     body:'Hi,I am Chirag.' 
    //  },
    //  {
    //     sender:'Priyanshu',
    //     body:'I am Priyanshu.' 
    //  },
// ];
const messageD=props.messages.map((cur,i)=>{
    return(
         <div key={cur+i}>
             <Message sender={cur.senderId} body={cur.text}/>
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