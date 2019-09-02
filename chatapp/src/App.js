import React,{Component} from 'react';
import classes from './App.module.css';
import MessageList from './Component/Messages/MessageList';
import Room from './Component/Rooms/Room';
import NewRoom from './Component/Rooms/NewForm';
import Send from './Component/Send/Send';
import Chatkit from '@pusher/chatkit-client';
import {tokenUrl,instanceLocator} from './config';

class App extends Component
{
  state={
     messages:[]
  }
  componentDidMount()
  {
    const ChatManager=new Chatkit.ChatManager({
      instanceLocator,
      userId:'divyanshooter',
      tokenProvider:new Chatkit.TokenProvider({
        url:tokenUrl
      })
    })
    ChatManager.connect()
     .then(currUser=>{
        currUser.subscribeToRoom({
          roomId:"6ee3cac3-32f3-49c8-ab96-08a84dded8cc",
          hooks:
          {
            onMessage : message=>{
                this.setState({
                  messages:[...this.state.messages,message]
                })
            }
          }

        })
     })
  }
  render()
      {
        return (
          <div className={classes.App}>
            <Room toadd={classes.room}/>
            <MessageList messages={this.state.messages} toadd={classes.message}/>
            <NewRoom toadd={classes.new}/>
            <Send toadd={classes.send}/>
      
          </div>
        );
      }
}
  


export default App;
