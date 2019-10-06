import React,{Component} from 'react';
import classes from './Dashboard.module.css';
import Navigation from './Navigation/Navigation';
import Chatlist from './Chatlist/Chatlist';
import MessageList from './MessageList/MessageList';

const firebase=require('firebase');
class DashBoard extends Component
{
 state={
    email:'',
    chats:[],
    selchat:'',
    firends:[],
    selOnline:'false',
    typing:false
 };
    render()
     {
        return(
            <div className={classes.main}>
               <Navigation email={this.state.email} logout={this.logout}/>
               <Chatlist 
               chats={this.state.chats}
               email={this.state.email}
               selchat={this.props.selchat}
               selOnline={this.state.selOnline}
               selectedchat={this.selectedchat}/>
               <MessageList 
                     typingHandler={this.updateActivity.bind(this,this.state.email,this.state.selchat)} 
                     typing={this.state.typing} 
                     email={this.state.email} 
                     chats={this.state.chats}
                     selchat={this.state.selchat} 
                     sendMsg={this.sendMessage}
                     selOnline={this.state.selOnline} />
              </div>
           );
         
     }
     componentDidMount=()=>{
        firebase.auth().onAuthStateChanged(async user=>{
           if(!user)
           {
              this.props.history.replace('./login');
           }
           else
           {
              await firebase
                .firestore()
                .collection('chats')
                .where('users','array-contains',user.email)
                .onSnapshot(async res=>{
                   const chats=res.docs.map(curr=>curr.data());
                  let index;
                   const friends=chats.map(curr=>{
                      index=curr.users.findIndex(curr=>curr!==user.email)
                      return curr.users[index];
                   });
                
                   await this.setState({
                      email:user.email,
                      chats:chats,
                      friends:friends
                   });
                   
                });
               this.goOnline(user.email);
                
             
            await firebase
              .firestore()
              .collection('ActiveUsers')
              .where("online","==",true)
              .onSnapshot(res=>{
                  const id =res.docs.map(curr=>curr.id);

                  const online=id.map(curr=>{
                     if(this.state.friends.includes(curr))
                     {
                      this.updateActivity(this.state.email,curr,'online','true')
                     }
                  })
              })
              await firebase
              .firestore()
              .collection('ActiveUsers')
              .where("online","==",false)
              .onSnapshot(res=>{
                  const id =res.docs.map(curr=>curr.id);

                  const online=id.map(curr=>{
                     if(this.state.friends.includes(curr))
                     {
                      this.updateActivity(this.state.email,curr,'online','false')
                     }
                  })
              })
                
           }
        })
     }
     componentDidUpdate()
     {
        console.log(this.state);
        this.typingHandler();
     }
     typingHandler=()=>
     {
      if(this.state.selchat!=='')
      {
         const search=this.state.selchat.replace('.','#');
         
         const index=this.state.chats.findIndex(curr=>curr.hasOwnProperty(search));
         
         if(index!==-1)
         {
            let value=this.state.chats[index];
            value=value[search].typing;
            value=value==='true' ? true : false;
            if(this.state.typing!==value)
            {
               this.setState({typing:value});
            }
             
         }
         
      }

     }
    
     updateActivity=(key1,key2,activity,val)=>
      {
         const key=this.buildKey(key1,key2);
         
         let usr;
         if(activity==='typing')
         {
            usr= this.state.email;
         }
         else
         {
            if(key1===this.state.email)
             {
                usr=key2;
             }
             else
             {
                usr=key1;
             }
         }
         
         usr=usr.replace('.','#');
         usr=usr+'.'+activity;
           firebase
            .firestore()
            .collection('chats')
            .doc(key)
            .update({
               [usr]:val
            })
      }
      goOnline=(email)=>
      {
         console.log(email);
         firebase
         .firestore()
         .collection('ActiveUsers')
         .doc(email)
         .update({
            online:true
         });
      }
      goOffline=()=>
      {
         firebase
         .firestore()
         .collection('ActiveUsers')
         .doc(this.state.email)
         .update({
            online:false
         })
      }
     selectedchat=(email,online,chatlistChat,loadedchat)=>{
      //   console.log('Selected Fincon');
      //   console.log( this.state.selOnline);
      //   console.log(online);
      //   if(this.state.selchat===email && this.state.selOnline===online)
      //   {
      //      return;
      //   }
      this.setState({selchat:email,selOnline:online});
      loadedchat(chatlistChat);
    }
    buildKey=(friend,user)=>
    {
       let arr=[friend,user].sort();
       return arr[0]+':'+arr[1];
    }
    sendMessage=(e,msg)=>{
       e.preventDefault();
       let key=this.buildKey(this.state.email,this.state.selchat);
       let date = firebase.firestore.Timestamp.fromDate(new Date());
       firebase.firestore()
       .collection('chats')
       .doc(key)
       .update({
          message:firebase.firestore.FieldValue.arrayUnion({
             body:msg,
             sender:this.state.email,
             receiverread:false,
             created:date
          })
       })
   
    }
    logout=()=>{
       this.props.clearEmailHandler();
       firebase.auth().signOut();
       this.goOffline();
    }
};

export default DashBoard;