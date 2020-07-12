import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  Col,
  FormFeedback,
} from "reactstrap";

class Contact extends Component {
  state = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
    touched: {
      firstname: false,
      lastname: false,
      email: false,
      telnum: false,
    },
  };

  handleInput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };

  handleBlur = (field) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate = (firstname, lastname, email, telnum) => {
    const errors = {
      firstname: "",
      lastname: "",
      email: "",
      telnum: "",
    };
    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = "Firstname should be >=3 characters";
    } else if (this.state.touched.firstname && firstname.length > 15) {
      errors.firstname = "Firstname should be <=15 characters";
    }
    if (this.state.touched.lastname && lastname.length < 3) {
      errors.lastname = "Lastname should be >=3 characters";
    } else if (this.state.touched.lastname && lastname.length > 15) {
      errors.lastname = "Lastname should be <=15 characters";
    }
    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum)) {
      errors.telnum = "Tel. Num should only contain numbers";
    }
    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Email should contain @ ";
    }
    return errors;
  };
  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.telnum
    );
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    value={this.state.firstname}
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    onBlur={() => this.handleBlur("firstname")}
                    onChange={this.handleInput}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    value={this.state.lastname}
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={() => this.handleBlur("lastname")}
                    onChange={this.handleInput}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Conatct No.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    value={this.state.telnum}
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onBlur={() => this.handleBlur("telnum")}
                    onChange={this.handleInput}
                  />
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    value={this.state.email}
                    id="email"
                    name="email"
                    placeholder="Email"
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={() => this.handleBlur("email")}
                    onChange={this.handleInput}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInput}
                      />{" "}
                      <strong>May we contact you ?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInput}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    value={this.state.message}
                    id="message"
                    name="message"
                    row="12"
                    onChange={this.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;