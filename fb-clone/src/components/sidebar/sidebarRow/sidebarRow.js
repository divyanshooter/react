import React from 'react';
import './sidebarRow.css';
import {Avatar} from '@material-ui/core';
function sidebarRow({title,src,Icon}) {
    return (
        <div className="sidebarRow">
            {src ?<Avatar src={src}/> : null}
           {Icon ? <Icon/> : null}
            <h4>{title}</h4>
        </div>
    )
}

export default sidebarRow;
