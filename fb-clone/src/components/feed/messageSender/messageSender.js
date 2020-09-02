import React,{useState} from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibrabryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./messageSender.css";

function MessageSender() {
    const [input,setInput]=useState("");
    const[imageUrl,setImageUrl]=useState("");
    const handleSubmit=event=>{
        event.preventDefault();
        //db stuff
        setInput("");
        setImageUrl("");
    }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input 
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="What's on your mind?" 
          className="messageSender__input" />
          <input 
          value={imageUrl}
          onChange={e=>setImageUrl(e.target.value)}
          placeholder="image URL(optional)"/>
          <button onClick={handleSubmit} type="submit"> Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{color:"red"}}/>
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibrabryIcon style={{color:"green"}}/>
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{color:"orange"}}/>
            <h3>Feeling/Activity</h3>
          </div>
      </div>
    </div>
  );
}

export default MessageSender;
