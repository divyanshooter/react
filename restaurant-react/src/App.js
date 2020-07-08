import React,{Component} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";

class App extends Component {
  state={
    dishes:DISHES
  }
  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">DC Khao</NavbarBrand>
          </div>
        </Navbar>
        <Menu  dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
