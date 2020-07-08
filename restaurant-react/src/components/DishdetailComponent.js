import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export default class DishdetailComponent extends Component {
  renderDish = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };
  renderComments = (comments) => {
    if (comments != null) {
      return comments.map((comment) => {
        return (
          <li className="list-unstyled" key={comment.id}>
            <p>{comment.comment}</p>
            <p>
             -- {comment.author}, {comment.date}
            </p>
          </li>
        );
      });
    } else {
      return <div></div>;
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.props.dish ? <h4>Comments</h4> :null }
          {this.renderComments(
            this.props.dish ? this.props.dish.comments : null
          )}
        </div>
      </div>
    );
  }
}
