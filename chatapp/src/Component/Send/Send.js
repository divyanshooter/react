import React,{Component} from 'react';
import classes from './Send.module.css';
class Send extends Component{
    constructor()
    {
      super();
      this.state={
        message:' '
    }
      this.changeHandler=this.changeHandler.bind(this)
      this.submitHandler=this.submitHandler.bind(this)
    }
    
  changeHandler(event)
    {
        this.setState({
            message:event.target.value
        });
    }
    submitHandler(event)
    {
        event.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({message:''});
    }

    render()
    {
        const classArray=[classes.main,this.props.toadd].join(' ');
        return (
             <div className={classArray}>
                <form onSubmit={this.submitHandler}>
                    <input 
                     disabled={this.props.disabled}
                     onChange={this.changeHandler}
                     className={classes.input} 
                     value={this.state.message}
                     type="text" 
                     placeholder="Send Message"></input>
                    <button className={classes.button} type="submit" > Send</button>
                </form>
             </div>
        );
    }
    
}

export default Send;