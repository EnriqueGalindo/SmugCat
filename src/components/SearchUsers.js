import React, { Component } from "react";
// import { connect } from "react-redux";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  Button
} from "shards-react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { apiDomain, handleJsonResponse } from "../actions/constants";

fontawesome.library.add(faSearch);

export default class SearchUsers extends Component {
  state = {
    listOfUsers: [],
    users: []
  }
  handleSearch(event) {
    var searchBox = document.getElementById("search");
    var listOfUsers = [];

    this.state.users.filter(filterUsers);

    function filterUsers(event) {
      if (event.email.includes(searchBox.value)) {
        listOfUsers.push(event);
      }
    }

    this.setState({ listOfUsers: listOfUsers });
  }

  componentDidMount() {
    fetch (apiDomain + "/user").then(handleJsonResponse).then(users => {
      this.setState({users, listOfUsers:users})
    }) 
  }

  //   componentWillReceiveProps({ location = {} }) {
  //     if (
  //       location.pathname === "/users" &&
  //       location.pathname !== this.props.location.pathname
  //     ) {
  //       this.getUsers();
  //     }
  //   }

  //   getUsers() {
  //     get("/api/users").then(({ data }) => {
  //       const { users } = data;

  //       this.setState({
  //         users: data.users
  //       });
  //     });
  //   }

  render() {
    return (
      <div style={{
        backgroundColor: "#506485"
      }}>
      <Container style={{
        backgroundColor: "#D0D0BD",
        height: "100vh"
      }}>
        <Row>
          <InputGroup seamless size="lg">
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon="search" />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="Search Stores" id="search"/>
            <InputGroupAddon type="append">
              <Button
                theme="secondary"
                onClick={() => {
                  this.handleSearch(this.state.users);
                }}
              >
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover style={{ marginTop: "30px" }}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>About</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listOfUsers.map(user => (
                  <>
                    <tr>
                      <td>
                        <Image
                          src={user.pictureLocation}
                          style={{ width: "50px", padding: "7px" }}
                        />
                        <Link to={`/profile/${user.email}`}>
                          {user.email}
                        </Link>
                      </td>
                      <td> {user.about}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.auth.login
//   };
// };

// export default connect(mapStateToProps)(SearchUsers);
