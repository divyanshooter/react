import React,{Component} from 'react';
import classes from './NewForm.module.css';

class newForm extends Component{
    constructor()
    {
        super();
        this.state={
            roomName:''
        };
        this.submitHandler=this.submitHandler.bind(this);
        this.changeHandler=this.changeHandler.bind(this);

    }
    changeHandler(event)
    {
        this.setState({roomName:event.target.value});
    }
    submitHandler(event){
       event.preventDefault();
       this.props.createRoom(this.state.roomName);
       this.setState({roomName:''})
    }
    render()
    {
        const classArray=[this.props.toadd,classes.main].join(' ');
        return(
            <div className={classArray}>
                <form onSubmit={this.submitHandler}>
                    <input
                        onChange={this.changeHandler} 
                        className={classes.input}
                        type="text" 
                        placeholder="Room Name"
                        value={this.state.roomName}/>
                    <button className={classes.button} type='submit' >Create Room</button>
                </form>
            </div>
        );
    }
 
}

export default newForm;
