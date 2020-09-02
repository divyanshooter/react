import React from 'react';
import './story.css';
import { Avatar } from '@material-ui/core';

function story({image,profileSrc,title}) {
    return (
        <div style={{backgroundImage:`url(${image})`}}className='story'>
            <Avatar src={profileSrc} classname="story__avatar"/>
            <h4>{title}</h4>
        </div>
    )
}

export default story;
