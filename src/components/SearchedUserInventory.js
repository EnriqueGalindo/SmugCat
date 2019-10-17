import React, { Component } from "react";
import { connect } from "react-redux";
import CustardModal from "./CustardModal";
import {
  Container,
  Row,
  Col,
  Image,
  Navbar,
  NavDropdown,
  Nav,
  Jumbotron,
  InputGroup,
  FormControl
} from "react-bootstrap";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  FormInput,
  FormRadio
} from "shards-react";
import { Link } from "react-router-dom";
import { apiDomain, handleJsonResponse } from "../actions/constants";

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { differenceInCalendarQuarters } from "date-fns";

class SearchedUserInventory extends Component {
  state = {
    searchedUser: { cards: [] }
  };

  componentDidMount() {
    fetch(apiDomain + "/user")
      .then(handleJsonResponse)
      .then(users => {
        const pathname = this.props.match.params.profileId;
        this.setState({ users, listOfUsers: users });
        for (let i = 0; i < this.state.users.length; i++) {
          if (pathname === this.state.users[i].username) {
            this.setState({ searchedUser: this.state.users[i] });
            console.log(this.state.searchedUser);
          }
        }
      });
  }

  getBoxes() {
    const boxNames = [];
    this.state.searchedUser.cards.forEach(card => {
      card.locations.forEach(location => {
        if (boxNames.includes(location.location)) {
          //no operation
        } else {
          boxNames.push(location.location);
        }
      });
    });
    return boxNames;
  }
  // componentDidMount() {
  //   this.props.getCards();
  // }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#506485",
            border: "25px solid black"
          }}
        >
          <Container
            className="container"
            style={{
              backgroundColor: "#D0D0BD",
              height: "100vh"
            }}
          >
            <br />
            <Jumbotron
              style={{
                margin: "0px",
                backgroundColor: "#506485",
                border: "1px solid #4A999C",
                borderRadius: "10px",
                color: "#D0D0BD"
              }}
            >
              <h1 style={{color: "#D0D0BD"}}>Hello, {this.state.searchedUser.username}!</h1>
              <p>Welcome to your inventory page!</p>
            </Jumbotron>
            <br />
            <Navbar
              style={{
                backgroundColor: "#D4848F",
                border: "1px solid #4A999C",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <Nav>
                <Nav.Link as={Link} to="/profile">My Profile</Nav.Link>
                <Nav.Link as={Link} to={`/profile/${this.state.searchedUser.username}`}>{this.state.searchedUser.username} Profile</Nav.Link>
                <Nav.Link as={Link} to="/search">Search Users</Nav.Link>
                <Nav.Link as={Link} to="/">Logout</Nav.Link>
              </Nav>
            </Navbar>
            <br />
            <br />
            <div>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                {this.getBoxes().map(boxName => {
                  return (
                    <CustardModal
                      user={this.state.searchedUser}
                      boxName={boxName}
                    />
                  );
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

export default SearchedUserInventory;
