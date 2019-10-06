import React,{Component} from 'react';
import classes from './Send.module.css';
import SendLogo from '../../../../images/icon.png';

class Send extends Component
{
    state={
        msg:''
    }
    render()
    {
        return(
            <div className={classes.main}>
                <form className={classes.container} onSubmit={(e)=>this.validForm(e)}>
                    <input onKeyDown ={()=>this.props.typingHandler('typing','true')} className={classes.input} value={this.state.msg} onChange={(e)=>this.changeHandler(e)} type="text" placeholder="Enter Your Message"></input>
                    <button className={classes.send} type="submit"><img src={SendLogo} alt="Send"></img></button>
                </form>
            </div>
        )
    }
    validForm=(e)=>{
        if(this.state.msg==='')
        {
            return;
        }
        else
        {
            this.cleardata();
            this.props.typingHandler('typing','false');
            this.props.sendMsg(e,this.state.msg);
        }
    }
    cleardata=()=>{
        this.setState({msg:''});
    }
    changeHandler=(e)=>{
        this.setState({msg:e.target.value});

    }
}

export default Send;