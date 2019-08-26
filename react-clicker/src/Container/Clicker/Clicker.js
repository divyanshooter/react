import React,{Component} from 'react';
import classes from './Clicker.module.css';
import Button from '../../Components/UI/Button/Button';


class Clicker extends Component
{
    state={
        count:0
    }

    addEventHandler=()=>{
        let oldCount=this.state.count;
        oldCount=oldCount+1;
        this.setState({count:oldCount});
    }
    minusEventHandler=()=>{
        let oldCount=this.state.count;
        oldCount=oldCount-1;
        this.setState({count:oldCount});
    }
    restartEventHandler=()=>{
        let oldCount=this.state.count;
        oldCount=0;
        this.setState({count:oldCount});
    }
    render()
  {
      return(
          
         <div className={classes.clicker}>
              <p className={classes.screen}>
              {this.state.count}
              </p>
             <div className={classes.control}>
             <Button type="add" clicked={this.addEventHandler}/>
             <Button type="restart" clicked={this.restartEventHandler}/>
             <Button type="minus" clicked={this.minusEventHandler}/>
              
             </div>
             
          </div>

          
          
      );
  }
}
export default Clicker;
