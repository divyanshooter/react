import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Control, Errors } from "react-redux-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Button,
  Label,
  Col,
} from "reactstrap";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => ! val || val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const isEmail = (val) =>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
 

  handleSubmit = (values) => {
    this.props.submitFeedbackForm(values);
    this.props.resetFeedbackForm();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Indore
              <br />
              India
              <br />
              <i className="fa fa-phone"></i>: +91 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +91 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:dckhayo@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+9112345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:dckhayo@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send Us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    className="form-control"
                    name="firstname"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                    placeholder="First Name"
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required:'Required',
                      minLength:'Must be greater than 3 characters',
                      maxLength:'Must be smaller than 15 characters'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    id="lastname"
                    name="lastname"
                    model=".lastname"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                    className="form-control"
                    placeholder="Last Name"
                  />
                   <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required:'Required',
                      minLength:'Must be greater than 3 characters',
                      maxLength:'Must be smaller than 15 characters'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Conatct No.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    className="form-control"
                    id="telnum"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber
                    }}
                    name="telnum"
                    placeholder="Tel. Number"
                  />
                   <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required:'Required',
                      minLength:'Must be greater than 3 characters',
                      maxLength:'Must be smaller than 15 characters',
                      isNumber:'Only Numbers are allowed'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    validators={{
                      required,
                      isEmail
                    }}
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                   <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required:'Required',
                      isEmail:'Valid Email is required'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you ?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    className="form-control"
                    id="message"
                    name="message"
                    row="12"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
