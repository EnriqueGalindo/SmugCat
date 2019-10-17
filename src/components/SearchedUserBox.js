import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions";

import Hover from "./Hover";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Tooltip,
  Button
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class SearchedUserBox extends Component {
  componentDidMount() {
    fetch(apiDomain + "/user")
      .then(handleJsonResponse)
      .then(users => {
        const pathname = this.props.match.params.profileId;
        this.setState({ users, listOfUsers: users });
        for (let i = 0; i < this.state.users.length; i++) {
          console.log(this.state.users[i]);
          if (pathname === this.state.users[i].username) {
            this.setState({ searchedUser: this.state.users[i] });
          }
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {/* {() => this.getCardsatLocation(this.props.user.cards, "box1")} */}
          {this.state.searchedUser.cards.map(card => {
            return card.locations.map(location => {
              const cardId = card.cardName
                .replace(" ", "-")
                .replace("'", "-")
                .replace(",", "-");
              //checks the whole locations array to see if any cards are in box1
              if (location.location === this.props.boxName) {
                return (
                  <Card
                    style={{
                      maxWidth: "300px",
                      margin: "20px",
                      backgroundColor: "#D0D0BD"
                    }}
                  >
                    <CardHeader id={cardId}>
                      Card Name: {card.cardName}
                    </CardHeader>
                    <CardBody>
                      <Hover target={"#" + cardId} cardName={card.cardName} />
                      <CardTitle>Quantity: {location.quantity}</CardTitle>
                    </CardBody>
                  </Card>
                );
              }
            });
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchedUserBox;
