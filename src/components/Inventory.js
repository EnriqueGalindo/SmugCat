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
        <div style={{
          backgroundColor: "#506485",
          border: "25px solid black"
        }}>
        <Container className="container" style={{
          backgroundColor: "#D0D0BD",
          height: "100vh"
        }}>
          <br />
            <Jumbotron style={{margin: "0px", backgroundColor: "#506485", border: "1px solid #4A999C", borderRadius: "10px", color: "#D4848F"}}>
                <h1 style={{color: "#D4848F"}}>Hello, {this.props.user.username}!</h1>
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
                <Nav>
                    <Nav.Link href="/profile">My Profile</Nav.Link>
                    <Nav.Link href="/profile/search">Search Users</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar>
            <hr style={{ marginBottom: "111.111px" }}></hr>
        <div>
          <Row style={{
            display: "flex",
            justifyContent: "space-around"
          }}>
              {this.getBoxes().map(boxName => {
            return <CustardModal boxName={boxName}/>
          })}
        
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

export default connect(mapStateToProps)(Inventory);
