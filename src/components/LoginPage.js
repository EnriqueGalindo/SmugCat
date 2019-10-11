import React, { Component } from "react";
import { Form, FormGroup, FormInput, Button } from "shards-react";
import { connect } from "react-redux";
import { loginThenGoToInventory as login } from "../actions";

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
    return (
      <React.Fragment>
              
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "#D0D0BD",
            color: "#D0D0BD"
          }}
        >
                  
          <Form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "50vw",
              border: "15px solid black",
              borderRadius: "10px",
              backgroundColor: "#506485"
            }}
            // onSubmit={submitRegister}
          >
                      
            <FormGroup>
                          <h1 style={{ color: "#D4848F" }}>Register</h1>
                          <label htmlFor="#username">Username</label>
                          
              <FormInput
                name="username"
                type="text"
                // value={registerEmail}
                // onChange={e => setRegisterEmail(e.target.value)}
                id="#username"
                placeholder="Username"
              />
                          
              <br />
                          <label htmlFor="#password">Password</label>
                          
              <FormInput
                name="password"
                type="password"
                // value={registerPassword}
                // onChange={e => setRegisterPassword(e.target.value)}
                id="#password"
                placeholder="Password"
              />
                          
              <br />
                          
              <Button type="submit" theme="success">
                              Log In             
              </Button>
                        
            </FormGroup>
                    
          </Form>
                  
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "50vw",
              border: "15px solid black",
              borderRadius: "10px",
              backgroundColor: "#8B6B89"
            }}
            onSubmit={this.handleLogin}
          >
                      
            <FormGroup>
                          <h1 style={{ color: "#4A999C" }}>Login</h1>
                          <label htmlFor="#username">Username</label>
                          
              <FormInput
                name="loginEmail"
                type="text"
                value={this.state.loginEmail}
                onChange={this.handleChange}
                id="#username"
                placeholder="Username"
              />
                          
              <br />
                          <label htmlFor="#password">Password</label>
                          
              <FormInput
                name="loginPassword"
                type="password"
                value={this.state.loginPassword}
                onChange={this.handleChange}
                id="#password"
                placeholder="Password"
              />
                          
              <br />
                          
              <Button type="submit" theme="success">
                              Log In             
              </Button>
                        
            </FormGroup>
            {this.props.loginError && <p>{this.props.loginError}</p>}
                
          </Form>

        </div>
            
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    //Mapping State to props
    loginError: state.auth.loginError
  }),

  //Map actions to props
  { login }
)(LoginPage);
