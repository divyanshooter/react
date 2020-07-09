import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };
  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };
  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">DC Khao</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
