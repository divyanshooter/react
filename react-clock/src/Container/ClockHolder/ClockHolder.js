import React,{Component} from 'react';
import CalendarControl from '../../Components/CalenderControl/CalenderContro';
import Clock from '../../Components/Clock/Clock';
 
class ClockHolder extends Component
    {
      
     render()
       {
       let date=new Date();
       let k=date.getHours()+':'+date.getMinutes()+':'+date.getUTCSeconds();
        console.log(k);
         return (
              <div>
                  <CalendarControl/>
                  <Clock time={k}/>
              </div>
            
                );
             }
    }
    


export default ClockHolder;