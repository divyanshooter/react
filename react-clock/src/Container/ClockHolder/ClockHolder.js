import React,{Component} from 'react';
import CalendarControl from '../../Components/CalenderControl/CalenderContro';
import Clock from '../../Components/Clock/Clock';
 
class ClockHolder extends Component
    {
      state={
        visible:false,
        date:new Date()
      }
      toggleEventHandler=()=>{
        let value=this.state.visible;
        this.setState({visible:!value});
      }
       componentDidMount()
       {
        setInterval(()=>
        {
          
          let date=new Date();
          this.setState({date:date});
        },10);
       
        }
     render()
       {
        return (
              <div>
                  <CalendarControl clicked={this.toggleEventHandler} visible={this.state.visible}/>
                  <Clock date={this.state.date} visible={this.state.visible}  />
              </div>
            
                );
             }
    }
    


export default ClockHolder;