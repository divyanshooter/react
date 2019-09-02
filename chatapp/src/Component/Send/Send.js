import React from 'react';
import classes from './Send.module.css';
const send=(props)=>{
    let classArray=[classes.main,props.toadd].join(' ');
    return (
         <div className={classArray}>
            <form>
                <input className={classes.input} type="text" placeholder="Send Message"></input>
                <button className={classes.button} type="submit" > Send</button>
            </form>
         </div>
    );
}

export default send;