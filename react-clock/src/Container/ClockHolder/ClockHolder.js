import React,{Component} from 'react';
import CalendarControl from '../../Components/CalenderControl/CalenderContro';
import Clock from '../../Components/Clock/Clock';
 
class ClockHolder extends Component
    {
      
     render()
       {
      let day=['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
      let Month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
       let date=new Date();
       let time=date.getHours()+':'+date.getMinutes()+':'+date.getUTCSeconds();
       let dates=day[date.getDay()]+ ' ' +date.getDate()+ ' ' +Month[date.getMonth()]+ ' ' +date.getFullYear();

         return (
              <div>
                  <CalendarControl/>
                  <Clock time={time} date={dates} visible="false"/>
              </div>
            
                );
             }
    }
    


export default ClockHolder;