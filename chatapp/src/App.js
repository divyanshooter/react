import React from 'react';
import classes from './App.module.css';
import MessageList from './Component/Messages/MessageList';
import Room from './Component/Rooms/Room';
import NewRoom from './Component/Rooms/NewForm';
import Send from './Component/Send/Send';

function App() {
  return (
    <div className={classes.App}>
      <Room toadd={classes.room}/>
      <MessageList toadd={classes.message}/>
      <NewRoom toadd={classes.new}/>
      <Send toadd={classes.send}/>

    </div>
  );
}

export default App;
