import React from 'react';
import classes from './Room.module.css';
const Room=(props)=>{
    const classArray=[classes.room,props.toadd].join(' ');
    return(
        <div className={classArray}>
            <div>
                Room List
            </div>
        </div>
    );
}

export default Room;