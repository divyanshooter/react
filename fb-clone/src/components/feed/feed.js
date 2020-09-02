import React from 'react';
import StoryReel from './storyReel/storyReel';
import MessageSender from './messageSender/messageSender';
import './feed.css';

function feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
        </div>
    )
}

export default feed
