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

fontawesome.library.add(faSearch);

export default class SearchUsers extends Component {
  state = {
    stubUsers: [
      {
        username: "bob",
        about: "I like turtles",
        pictureLocation:
          "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/d/d1/Robot_Chicken.jpg"
      },
      {
        username: "bob1",
        about: "I like turtles",
        pictureLocation:
          "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/d/d1/Robot_Chicken.jpg"
      },
      {
        username: "bob2",
        about: "I like turtles",
        pictureLocation:
          "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/d/d1/Robot_Chicken.jpg"
      }
    ],

    listOfUsers: [
      {
        username: "bob",
        about: "I like turtles",
        pictureLocation:
          "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/d/d1/Robot_Chicken.jpg"
      },
      {
        username: "bob1",
        about: "I like turtles",
        pictureLocation:
          "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/d/d1/Robot_Chicken.jpg"
      },
      {
        username: "bob2",
        about: "I like turtles",
        pictureLocation:
          "https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/d/d1/Robot_Chicken.jpg"
      }
    ]
  };

  handleSearch(event) {
    var searchBox = document.getElementById("search");
    var listOfUsers = [];

    this.state.stubUsers.filter(filterUsers);

    function filterUsers(event) {
      if (event.username.includes(searchBox.value)) {
        listOfUsers.push(event);
      }
    }

    this.setState({ listOfUsers: listOfUsers });
  }

  componentDidMount() {}

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
      <Container>
        <Row>
          <InputGroup seamless size="lg">
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon="search" />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput placeholder="Search Stores" id="search" />
            <InputGroupAddon type="append">
              <Button
                theme="secondary"
                onClick={() => {
                  this.handleSearch(this.state.stubUsers);
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
                        <Link to={`/profile/${user.username}`}>
                          {user.username}
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
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.auth.login
//   };
// };

// export default connect(mapStateToProps)(SearchUsers);
