import React,{Component} from 'react';
import Status from './StatusBar/Status';
import Message from './Message/Message';
import Send from './Send/Send';
import classes from './Messages.module.css';


class messageList extends Component {
     
    
    render()
   {
    

    let messageD;
    if(this.props.selchat==='')
    {
        messageD=<h1>No Chat To Show</h1>
    }
     else
     {
       
        messageD= (this.props.chats.map((cur,i)=>{
            if(cur.users.findIndex(cur=>cur===this.props.selchat)!==-1)
            {
                
                let spemsg=cur.message.map((curr,j)=>{
                    let messageDiv= curr.sender!==this.props.email? classes.messageDiv:'';
                      return(
                        <div  className={messageDiv} key={curr+j}>
                          <Message sendMessage={this.props.sendMessage} sender={curr.sender} body={curr.body}/>
                       </div>
                      );
        
                    });
              return spemsg;
            }
            else
             {
                 return null;
             }
            
        }));
     }
        
    
      return(
        
          <div className={classes.main}>
            <div >
              <Status email={this.props.selchat} online={this.props.selOnline}/>
            </div>
            <div className={classes.message}>
              
              {messageD} 
            </div>
              
           {this.props.typing ? <div className={classes.typing}>Typing.....</div> : null}
           {this.props.selchat==='' ? null : <Send typingHandler={this.props.typingHandler} sendMsg={this.props.sendMsg} />}
          </div>
        );
   }

  

}

export default messageList;