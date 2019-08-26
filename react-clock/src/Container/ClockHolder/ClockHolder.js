import React,{Component} from 'react';
import CalendarControl from '../../Components/CalenderControl/CalenderContro';
 
class ClockHolder extends Component
    {
     render()
       {
         return (
              <div>
                  <CalendarControl/>
                  <p>Digital Clock</p>   
              </div>
            
                );
             }
    }
    


export default ClockHolder;