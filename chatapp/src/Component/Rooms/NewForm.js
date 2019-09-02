import React from 'react';

const newForm=(props)=>{
    return(
        <div className={props.toadd}>
            <form>
                <input type="text" placeholder="Room Name"/>
                <button type='submit' >Create Room</button>
            </form>
        </div>
    );
}

export default newForm;
