import React, { Component } from "react";
import { baseURl } from "../shared/baseURL";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Control, Errors, LocalForm } from "react-redux-form";
import Loading from "./LoadingComponent";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class CommentForm extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState((state) => {
      return {
        isModalOpen: !state.isModalOpen,
      };
    });
  };
  handleSubmit = (values) => {
    this.toggleModal();
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.name,
      values.comment
    );
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor=".rating" sm={12}>
                  Rating
                </Label>
                <Col sm={12}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                    defaultValue="1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="name" sm={12}>
                  Your Name
                </Label>
                <Col sm={12}>
                  <Control.text
                    model=".name"
                    id="name"
                    className="form-control"
                    name="name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                    placeholder="Your Name"
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be 3 characters or more",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="password" sm={12}>
                  Comment
                </Label>
                <Col sm={12}>
                  <Control.textarea
                    model=".comment"
                    className="form-control"
                    id="comment"
                    name="comment"
                    rows={6}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <button className="btn btn-secondary" onClick={this.toggleModal}>
          <i className="fa fa-pencil"></i> Submit Comment
        </button>
      </div>
    );
  }
}

const RenderDish = (props) => {
  if (props.dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card>
            <CardImg
              width="100%"
              src={baseURl + props.dish.image}
              alt={props.dish.name}
            />
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
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
        <ul>
        <Stagger in>
        {props.comments.map((comment) => {
          return (
            <Fade in>
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
            </Fade>
          );
        })}
        </Stagger>
        </ul>
        <CommentForm postComment={props.postComment} dishId={props.dishId} />
      </div>
    );
  } else {
    return <div></div>;
  }
};
const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="conatiner">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.error) {
    return (
      <div className="conatiner">
        <div className="row">
          <h4>{props.error}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.dish ? props.comments : null}
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
