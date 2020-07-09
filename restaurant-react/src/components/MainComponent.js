import React, { Component } from "react";
import {Route,Switch, Redirect} from 'react-router-dom';
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  state = {
    dishes: DISHES
  };

  
  render() {
    const HomePage=()=>{
      return <Home/>
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
