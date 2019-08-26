import React,{Component} from 'react';
import classes from './Clicker.module.css';
import Button from '../../Components/UI/Button/Button';

class Clicker extends Component
{
    state={
        count:0
    }
    render()
  {
      return(
          
         <div className={classes.clicker}>
              <p className={classes.screen}>
              {this.state.count}
              </p>
             <div className={classes.control}>
             <Button type="add"/>
             <Button type="restart"/>
             <Button type="minus"/>
              
             </div>
             
          </div>

          
          
      );
  }
}
export default Clicker;
