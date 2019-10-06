import React,{Component} from 'react';
import classes from './Chatlist.module.css';
class Chatlist extends Component
{
   state={
     loadedChat:''
   }
   componentDidUpdate()
   {
     console.log('called');
    //  if(this.state.loadedChat!=='')
    //  {
    //   console.log('component Did mOunt');
    //   console.log(this.props.chats);
    //   const chats=this.props.chats.map((curr,i)=>
    //     {
    //       let reciever=curr.users.filter(cur=>cur!==this.props.email);
    //       let online=reciever[0].replace('.','#');
    //       if(this.state.loadedChat===curr && curr[online].online === this.props.selOnline)
    //        {
    //          return ;
    //        }
    //       this.props.selectedchat(reciever[0],curr[online].online,curr,this.loadedChat);
    //     });
    //  }

     
        
   }
    render()
    {
        const chats=this.props.chats.map((curr,i)=>
        {
          const color=this.colorgiver();
          let reciever=curr.users.filter(cur=>cur!==this.props.email);
          let online=reciever[0].replace('.','#');
          
           return(
             <div className={classes.container} onClick={()=>this.props.selectedchat(reciever[0],curr[online].online,curr,this.loadedChat)}>
               <div>
                   <div style={{backgroundColor:color.bgcolor,color:color.fontcolr}} className={classes.chatlistDiv}>{reciever[0].split('')[0].toUpperCase()}</div>
                   <p className={classes.chatlistP}>{reciever}</p>
               </div>
              {curr[online].online==='true' ? <div className={classes.online}></div> : null} 
               <hr className={classes.chatlistHr}></hr>
            
             </div>
            
           )
        }
            
        )
        return(
            <div className={classes.chatlist}>
              {chats}
            </div>
            
        );
    }

    loadedChat=(cur)=>{
      this.setState({loadedChat:cur});
    }
    
    colorgiver=()=>{
      let bgcolor=['orange','black','green','blue'];
      let fontcolr=['black','white','white','white']
      const number=Math.floor(Math.random()*4);
      return {bgcolor:bgcolor[number],fontcolr:fontcolr[number]};
    }
}

export default Chatlist;