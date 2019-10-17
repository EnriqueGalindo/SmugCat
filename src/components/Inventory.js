import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"
import Box1 from "./Box1"
import CustardModal1 from "./CustardModal1"
import CustardModal2 from "./CustardModal2"
import { Container, Row, Col, 
  Image, Navbar, NavDropdown, Nav, 
  Jumbotron, InputGroup, FormControl 
  } from 'react-bootstrap';
import {
  Button,
  Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter,
  FormInput, FormRadio
  } from "shards-react";

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


class Inventory extends Component {

  // componentDidMount() {
  //   this.props.getCards();
  // }

  render() {
    return (
      <React.Fragment>
        <div style={{
          backgroundColor: "#D0D0BD",
          border: "25px solid black"
        }}>
        <Container className="container" style={{
          backgroundColor: "#506485",
          height: "100vh"
        }}>
          <br />
            <Jumbotron style={{margin: "0px", backgroundColor: "#D0D0BD", border: "1px solid #4A999C", borderRadius: "10px"}}>
                <h1>Hello, {this.props.user.username}!</h1>
                <p>Welcome to your inventory page!</p>
            </Jumbotron>
            <br />
            <Navbar style={{
              backgroundColor: "#D4848F",
              border: "1px solid #4A999C",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around"
            }}>
                {/* <Nav className="mr-auto">
                    <Nav.Link href="*">Upcoming</Nav.Link>
                    <Nav.Link href="*">Near Me</Nav.Link>
                    <Nav.Link href="*">All Events</Nav.Link>
                </Nav> */}
                <Nav>
                    <Nav.Link href="/profile">My Profile</Nav.Link>
                    <Nav.Link href="/profile/search">Search Users</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar>
            <br />
            <br />
        <div>
          <Row style={{
            display: "flex",
            justifyContent: "space-around"
          }}>
        {/*this is a modal for box 1 */}
        <CustardModal1/>
        {/*this is a modal for box 2 */}
        <CustardModal2/>
        </Row>
        </div>





        {/* <p>{JSON.stringify(this.props.user.cards[0].cardName)}</p> */}
        {/* <pre>{JSON.stringify(this.props.user, null, "\t")}</pre> */}

        </Container>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.login
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getCards: () => dispatch(getCards())
//   }
// }


export default connect(mapStateToProps)(Inventory);
