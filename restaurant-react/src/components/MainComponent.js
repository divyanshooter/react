import React, { Component } from "react";
import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactUsComponent";
import About from "./AboutUsComponent";
import Footer from "./FooterComponent";

const mapStateToProps=state=>{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        ></DishDetail>
      );
    };

    const AboutComponet = () => {
      return <About leaders={this.props.leaders} />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/aboutus" component={AboutComponet} lea />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));