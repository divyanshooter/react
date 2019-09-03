import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message/Message';
import classes from './Messages.module.css';

class messageList extends Component {
     
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight +100>= node.scrollHeight
    }
    componentDidUpdate()
    {
        if(this.shouldScrollToBottom)
        {
            const node=ReactDOM.findDOMNode(this);
            node.scrollTop=node.scrollHeight;
        }
        
    }
    render()
   {
    const classArray=[this.props.toadd,classes.main].join(' ');

    let messageD;
    if(!this.props.roomId)
    {
        messageD=(
            <div>
                <h3>
                  Join The Room  
                </h3>
            </div>
        );
    }
    else
    {
        messageD= (this.props.messages.map((cur,i)=>{
            return(
                 <div key={cur+i}>
                     <Message sender={cur.senderId} body={cur.text}/>
                </div>
            );
        }));
    }
   
      
        return(
        
          <div className={classArray}>
              {messageD}
          </div>
        );
   }

}

export default messageList;