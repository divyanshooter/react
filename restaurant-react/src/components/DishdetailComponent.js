import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = (props) => {
  if (props.dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
          <CardBody>
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const RenderComments = (props) => {
  if (props.comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {props.comments.map((comment) => {
          return (
            <li className="list-unstyled" key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};
const DishDetail = (props) => {
  return (
    <div className="row">
      <RenderDish dish={props.dish} />
      <RenderComments comments={props.dish ? props.dish.comments : null} />
    </div>
  );
};

export default DishDetail;
