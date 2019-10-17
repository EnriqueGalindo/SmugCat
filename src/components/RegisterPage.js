import React, { Component } from "react";
import { Form, FormGroup, FormInput, Button } from "shards-react";
import { Link } from "react-router-dom";
import { loginThenGoToInventory as login } from "../actions";
import { connect } from "react-redux";

class RegisterForm extends Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRegister = event => {
    event.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
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
              backgroundColor: "#506485",
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
                border: "15px solid #4A999C",
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
              backgroundColor: "#506485",
              color: "#D0D0BD"
            }}
            onSubmit={this.handleRegister}
          >
                      
            <FormGroup
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: "auto",
                padding: "100px",
                border: "15px solid #4A999C",
                borderRadius: "5%",
                minWidth: "400px",
                minHeight: "600px"
              }}
            >
              <h1 style={{ color: "#D4848F" }}>Register</h1>
              <label htmlFor="#email">Email</label>
              <FormInput
                name="email"
                type="text"
                //   value={this.state.loginEmail}
                onChange={this.handleChange}
                id="#email"
                placeholder="Email"
              />
                          
              <label htmlFor="#password">Password</label>
                          
              <FormInput
                name="password"
                type="password"
                //   value={this.state.loginPassword}
                onChange={this.handleChange}
                id="#password"
                placeholder="Password"
              />
                          
              <Button
                type="submit"
                style={{ backgroundColor: "#D4848F", borderColor: "#4A999C" }}
              >
                {" "}
                Register{" "}
              </Button>
                        
            </FormGroup>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Link to="/login">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#D4848F",
                    borderColor: "#4A999C",
                    height: "10vh"
                  }}
                >
                  Login Page
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
)(RegisterForm);
