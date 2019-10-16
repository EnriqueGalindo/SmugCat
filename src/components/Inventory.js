import React, { Component } from "react";
import { connect } from "react-redux";
import CustardModal from "./CustardModal"
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
import { differenceInCalendarQuarters } from "date-fns";


class Inventory extends Component {
  getBoxes() {
    const boxNames = []
    this.props.user.cards.forEach(card => {
      card.locations.forEach(location =>{
        if(boxNames.includes(location.location)){//no operation
        }
        else{
          boxNames.push(location.location)
        }
      })
    });
    return boxNames
  }
  // componentDidMount() {
  //   this.props.getCards();
  // }

  render() {
    return (
      <React.Fragment>
            <Jumbotron style={{margin: "0px"}}>
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling 
                extra attention to featured content or information.</p>
            </Jumbotron>
            <Navbar>
                <Nav className="mr-auto">
                    <Nav.Link href="*">Upcoming</Nav.Link>
                    <Nav.Link href="*">Near Me</Nav.Link>
                    <Nav.Link href="*">All Events</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/inventory">My Inventory</Nav.Link>
                    <Nav.Link href="/profile/search">Search Users</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar>
        <div>
          {this.getBoxes().map(boxName => {
            return <CustardModal boxName={boxName}/>
          })}
        {/* this is a modal for box 1
        <CustardModal1/>
        {/*this is a modal for box 2 
        <CustardModal2/> */}
        </div>





        {/* <p>{JSON.stringify(this.props.user.cards[0].cardName)}</p> */}
        {/* <pre>{JSON.stringify(this.props.user, null, "\t")}</pre> */}


      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.login
  };
};

export default connect(mapStateToProps)(Inventory);
