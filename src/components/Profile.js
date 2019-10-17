import React, { Component } from "react";
import "../App.css";
//import { getEvents } from "../actions";
import { handleJsonResponse } from "../actions/constants";

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
import { connect } from "react-redux";

//I'm sure there is a way to do this with import
//but I've gotten it to work this way...
const myModule = require("./imgString");
const imgString = myModule.imgString;
const tournamentURL = "https://mtgmeta.io/api/tournaments/standard";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false, events: [] };
  }

  //Trying to make fetch request when Component mounts to get data from API
  //and include it in the state...
  componentDidMount() {
    //this.props.getEvents();
    //this.setState({ events: getEvents() }); //When component will mount, call action creator
    fetch(tournamentURL)
      .then(handleJsonResponse)
      .then(result => {
        console.log("made fetch request and got response");
        this.setState({ events: result.data.tournaments }); //should be an array of the different tournaments..
        console.log(this.state);
      });
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div class="profile-wrapper" style={{ background: "#506485" }}>
        <React.Fragment>
          <Container
            style={{ marginBottom: "111.11px", background: "#D0D0BD" }}
          >
            <Jumbotron style={{ margin: "0px", background: "#506485" }}>
              <h1 style={{ textAlign: "center", color: "#D4848F" }}>
                Magic The Gathering
              </h1>
            </Jumbotron>

            <Navbar>
                <Nav className="mr-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link href="/inventory">My Inventory</Nav.Link>
                    <Nav.Link href="/profile/search">Search Users</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar>
            <hr style={{ marginBottom: "111.111px" }}></hr>

            <Row>
              <Col md={4}>
                <Image
                  src={imgString}
                  roundedCircle
                  style={{ border: "2px solid black" }}
                />
              </Col>

              <Col md={4}>
                <h2 style={{ color: "#506485" }}>{this.props.user.email}</h2>
                <br></br>
                <p style={{ textAlign: "justify" }}>
                  This is the <b>profile page</b> on our{" "}
                  <i>Magic the Gathering</i> app. This is the standard text
                  provided in our profile. A user will be able to create their
                  own profile descriptions (as well as uploading their own
                  image) which will be saved in our database and loaded upon
                  each visit.
                </p>
              </Col>

              <Col md={4}>
                <FormInput
                  size="lg"
                  placeholder="Search"
                  style={{ marginTop: "1.5vh" }}
                />

                <div style={{ textAlign: "center", marginTop: "25.75px" }}>
                  <FormRadio
                    inline
                    name="mtg"
                    checked={this.state.selectedSport === "users"}
                    onChange={() => {
                      this.changeSport("users");
                    }}
                  >
                    {" "}
                    Users{" "}
                  </FormRadio>

                  <FormRadio
                    inline
                    name="mtg"
                    checked={this.state.selectedSport === "cards"}
                    onChange={() => {
                      this.changeSport("cards");
                    }}
                  >
                    {" "}
                    Cards{" "}
                  </FormRadio>

                  <FormRadio
                    inline
                    name="mtg"
                    checked={this.state.selectedSport === "events"}
                    onChange={() => {
                      this.changeSport("events");
                    }}
                  >
                    {" "}
                    Events{" "}
                  </FormRadio>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <hr></hr>
            <h2 style={{ textAlign: "center", color: "#506485" }}>
              Upcoming Events:
            </h2>
            <br></br>
            <Container>
              <Row>
                <Col md={4}>
                  <Card style={{ minWidth: "333px", background: "#D4848F" }}>
                    <CardBody>
                      <CardTitle>
                        <h2 style={{ textAlign: "center", color: "#506485" }}>
                          Magicfest Columbus
                        </h2>
                      </CardTitle>
                      <hr></hr>
                      <Image
                        src="https://static.wixstatic.com/media/bebce7_30c96e8196d9489dac3afab4df65baab~mv2.png/v1/fill/w_398,h_208,al_c,q_80,usm_0.66_1.00_0.01/MagicFest%20Logo%20For%20Header.webp"
                        roundedCircle
                        style={{ border: "2px solid black", width: "300px" }}
                      />
                      <hr></hr>
                      <p style={{ textAlign: "center" }}>
                        Date: 11/22/19 - 11/24/19
                      </p>
                    </CardBody>

                    <CardFooter style={{ textAlign: "center" }}>
                      <Button
                        href="https://www.cfbevents.com/mtgcolumbus"
                        theme="info"
                        style={{ width: "80%" }}
                      >
                        Visit Site
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card style={{ minWidth: "333px", background: "#D4848F" }}>
                    <CardBody>
                      <CardTitle>
                        <h2 style={{ textAlign: "center", color: "#506485" }}>
                          Magicfest Richmond
                        </h2>
                      </CardTitle>
                      <hr></hr>

                      <Image
                        src="https://static.wixstatic.com/media/bebce7_30c96e8196d9489dac3afab4df65baab~mv2.png/v1/fill/w_398,h_208,al_c,q_80,usm_0.66_1.00_0.01/MagicFest%20Logo%20For%20Header.webp"
                        roundedCircle
                        style={{ border: "2px solid black", width: "300px" }}
                      />
                      <br></br>
                      <hr></hr>
                      <p style={{ textAlign: "center" }}>Date: 11/25/19</p>
                    </CardBody>

                    <CardFooter style={{ textAlign: "center" }}>
                      <Button
                        href="https://allevents.in/mobile/amp-event.php?event_id=1000073336795329"
                        theme="info"
                        style={{ width: "80%" }}
                      >
                        Visit Site
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card style={{ minWidth: "333px", background: "#D4848F" }}>
                    <CardBody>
                      <CardTitle>
                        <h2 style={{ textAlign: "center", color: "#506485" }}>
                          Magicfest Phoenix
                        </h2>
                      </CardTitle>
                      <hr></hr>
                      <Image
                        src="https://static.wixstatic.com/media/bebce7_30c96e8196d9489dac3afab4df65baab~mv2.png/v1/fill/w_398,h_208,al_c,q_80,usm_0.66_1.00_0.01/MagicFest%20Logo%20For%20Header.webp"
                        roundedCircle
                        style={{ border: "2px solid black", width: "300px" }}
                      />
                      <br></br>
                      <hr></hr>
                      <p style={{ textAlign: "center" }}>
                        Date: 10/25/19 - 10/27/19
                      </p>
                    </CardBody>

                    <CardFooter style={{ textAlign: "center" }}>
                      <Button
                        href="https://www.cfbevents.com/mtgphoenix"
                        theme="info"
                        style={{ width: "80%" }}
                      >
                        Visit Site
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>

            <hr></hr>
            <h2 style={{ textAlign: "center", color: "#506485" }}>
              Past Events:
            </h2>
            <br></br>

            <Container>
              <Row>
                {this.state.events.map(event => {
                  return (
                    <Col md={4}>
                      <Card
                        style={{ minWidth: "333px", background: "#D4848F" }}
                      >
                        <CardBody>
                          <CardTitle>
                            <h2
                              style={{ textAlign: "center", color: "#506485" }}
                            >
                              {event.name}
                            </h2>
                          </CardTitle>
                          <hr></hr>

                          <Image
                            src={imgString}
                            roundedCircle
                            style={{
                              border: "2px solid black",
                              width: "300px"
                            }}
                          />
                          <hr></hr>
                          <p style={{ textAlign: "center", color: "#506485" }}>
                            Winning Deck: {event.win_deck}
                            <br></br>
                            Date: {event.date}
                          </p>
                        </CardBody>

                        <CardFooter style={{ textAlign: "center" }}>
                          <Button
                            href={event.url} //this should be showing a URL...
                            theme="info"
                            style={{ width: "80%" }}
                          >
                            Visit Site
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

//this.props.user
const mapStateToProps = state => {
  return {
    user: state.auth.login
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getEvents: () => dispatch(getEvents())
//   };
// };

export default connect(mapStateToProps)(Profile);
