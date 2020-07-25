import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Loading from "./LoadingComponent";
const RenderDishItem = (props) => {
  return (
    <Card>
      <Link to={`/menu/${props.dish.id}`}>
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};
const Menu = (props) => {
  if (props.dishes.isLoading) {
    return (
      <div className="conatiner">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.error) {
    return (
      <div className="conatiner">
        <div className="row">
          <h4>{props.error}</h4>
        </div>
      </div>
    );
  } else {
    const menu = props.dishes.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderDishItem dish={dish} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default Menu;
