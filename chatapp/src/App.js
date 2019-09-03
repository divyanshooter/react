import React,{Component} from 'react';
import classes from './App.module.css';
import MessageList from './Component/Messages/MessageList';
import Room from './Component/Rooms/Room/Room';
import NewRoom from './Component/Rooms/NewForm';
import Send from './Component/Send/Send';
import Chatkit from '@pusher/chatkit-client';
import {tokenUrl,instanceLocator} from './config';

class App extends Component
{
  constructor()
  {
    super();
    this.state={
      messages:[],
      joinableRooms:[],
      joinnedRooms:[],
      roomId:null
   }
    this.sendMessage=this.sendMessage.bind(this);
    this.subscribeRoom=this.subscribeRoom.bind(this);
    this.getRooms=this.getRooms.bind(this);
    this.createRoom=this.createRoom.bind(this);
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
        this.currUser=currUser;
        this.getRooms();
        this.subscribeRoom();
     })
     .catch(err=>console.log('Error in Connecting User',err))
  } 

  getRooms()
  {
    this.currUser.getJoinableRooms()
    .then(joinableRooms=>{
      this.setState({
        joinableRooms,
        joinnedRooms:this.currUser.rooms
      })
    })
    .catch(err=>console.log('Error on Joinnable Rooms',err))
  }
  subscribeRoom(id)
  {
    this.setState({messages:[]});
    this.currUser.subscribeToRoom({
      roomId:id,
      hooks:
      {
        onMessage : message=>{
            this.setState({
              messages:[...this.state.messages,message]
            })
        }
      }

    })
    .then(rooms=>{
      this.setState({roomId:rooms.id});
       this.getRooms();
    })
     .catch(err=>console.log('Error to Subscrbing the Room',err));

  }
  createRoom(name)
  {
    this.currUser.createRoom({
        name
    })
    .then(room=>this.subscribeRoom(room.id))
    .catch(err=>console.log('Room cannot be created',err));
  }

  sendMessage(text)
   {
     this.currUser.sendMessage({
       text,
       roomId:this.state.roomId
     })
   }
  render()
      {
        return (
          <div className={classes.App}>
            <Room roomId={this.state.roomId} toadd={classes.room} rooms={[...this.state.joinableRooms,...this.state.joinnedRooms]} subscribeRoom={this.subscribeRoom}/>
            <MessageList roomId={this.state.roomId} messages={this.state.messages} toadd={classes.message}/>
            <NewRoom createRoom={this.createRoom} toadd={classes.new}/>
            <Send disabled={!this.state.roomId} sendMessage={this.sendMessage} toadd={classes.send}/>
      
          </div>
        );
      }
}
  


export default App;
