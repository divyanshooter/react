import React,{Component} from 'react';
class Signup extends Component
{
 state={};
 render()
  {
    return(
          <form>
              <label>Email</label>
              <input type="text"></input>
              <label>Password</label>
             <input type="password"></input>
             <label>Confirm Password</label>
             <input type="password"></input>

          </form>
      );
  }
};

export default Signup;