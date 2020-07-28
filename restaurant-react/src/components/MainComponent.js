import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactUsComponent";
import About from "./AboutUsComponent";
import Footer from "./FooterComponent";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    postComment: (dishId, rating, author, comment) =>
      dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    resetFeedbackForm: () => dispatch(actions.reset("feedback")),
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesError={this.props.dishes.error}
          promotion={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          promosLoading={this.props.promotions.isLoading}
          promosError={this.props.promotions.error}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersError={this.props.leaders.error}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          error={this.props.dishes.error}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsError={this.props.comments.error}
          postComment={this.props.postComment}
        ></DishDetail>
      );
    };

    const AboutComponet = () => {
      return <About leaders={this.props.leaders}  />;
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes} />}
              />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/aboutus" component={AboutComponet} lea />
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                )}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapsDispatchToProps)(Main));
