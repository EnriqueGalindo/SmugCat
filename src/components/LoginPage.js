import React, { Component } from "react";
import { Form, FormGroup, FormInput, Button } from "shards-react";
import { connect } from "react-redux";
import { loginThenGoToInventory as login } from "../actions";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class LoginPage extends Component {
  state = {
    loginEmail: "",
    loginPassword: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.login({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    });
  };

  render() {
    console.log(this.props.login);
    return (
      <>
        <div
          style={{
            border: "25px solid black",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Form
            style={{
              backgroundColor: "#8B6B89",
              height: "100vh",
              width: "50vw",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <FormGroup
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                margin: "auto",
                padding: "0",
                border: "15px solid #D4848F",
                borderRadius: "5%",
                minWidth: "400px",
                color: "#D0D0BD",
                minHeight: "600px",
                fontSize: "40px",
                maxWidth: "400px"
              }}
            >
              <p>Track Prices!</p>
              <p>Find Events!</p>
              <p>Browse Collections!</p>
            </FormGroup>
          </Form>
          <Form
            style={{
              display: "flex",
              height: "100vh",
              width: "50vw",
              backgroundColor: "#8B6B89",
              color: "#D0D0BD"
            }}
            onSubmit={this.handleLogin}
          >
            <FormGroup
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                margin: "auto",
                padding: "100px",
                border: "15px solid #D4848F",
                borderRadius: "5%",
                minWidth: "400px",
                minHeight: "600px"
              }}
            >
              <h1 style={{ color: "#4A999C" }}>Login</h1>
              <label htmlFor="#email">Email</label>
                          
              <FormInput
                name="loginEmail"
                type="text"
                value={this.state.loginEmail}
                onChange={this.handleChange}
                id="#email"
                placeholder="Email"
              />
                          
              <label htmlFor="#password">Password</label>
                          
              <FormInput
                name="loginPassword"
                type="password"
                value={this.state.loginPassword}
                onChange={this.handleChange}
                id="#password"
                placeholder="Password"
              />
                          
              <Button
                type="submit"
                style={{ backgroundColor: "#4A999C", borderColor: "#D4848F" }}
              >
                {" "}
                Log In{" "}
              </Button>
            </FormGroup>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Link to="/">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#4A999C",
                    borderColor: "#D4848F",
                    height: "10vh"
                  }}
                >
                  Register Page
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.auth.loginError
  };
};
const mapActionsToProps = {
  login: login
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginPage);
