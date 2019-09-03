import React from 'react';
import classes from './Room.module.css';
const Room=(props)=>{
    const classArray=[classes.room,props.toadd].join(' ');
    console.log(props.rooms);
    const orderedRoom=[...props.rooms].sort((a,b)=>a.id-b.id);
    const rooms=orderedRoom.map(el=>
            {
             const active= el.id ===props.roomId? classes.active: ''
                
                return(<li className={active} key={el.id}><a className={classes.listItem} onClick={()=>props.subscribeRoom(el.id)} href="#">{el.name}</a></li>);
            }
            
            );
    return(
        
        <div className={classArray}>
            <div>
                <h3>Rooms</h3>
                <ul className={classes.listItems}>
                    {rooms}
                </ul>
            </div>
        </div>
    );
}

export default Room;