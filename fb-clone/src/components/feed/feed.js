import React, { useState, useEffect } from 'react';
import StoryReel from './storyReel/storyReel';
import MessageSender from './messageSender/messageSender';
import Post from './post/Post';
import db from '../../firebase';
import './feed.css';

function Feed() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})));
        })
    },[])
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map(post=>{
                 return (
                    <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}/>
                 )
            })}
        </div>
    )
}

export default Feed;
