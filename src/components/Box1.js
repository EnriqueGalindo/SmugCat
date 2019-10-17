import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


class Box1 extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div>
                    {/* {() => this.getCardsatLocation(this.props.user.cards, "box1")} */}
                    {this.props.user.cards.map(card => {
                        return (
                            card.locations.map((location) => {
                                //checks the whole locations array to see if any cards are in box1
                                if (location.location === 'box1') {
                                    return (
                                        <Card style={{ maxWidth: "300px", margin:"20px", backgroundColor: "#D0D0BD" }}>
                                            <CardHeader>Card Name: {card.cardName}</CardHeader>
                                            <CardBody>
                                                <CardTitle>
                                                    Quantity: {location.quantity}
                                                </CardTitle>
                                            </CardBody>
                                        </Card>
                                    )
                                }
                            })


                        )
                    })}
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

export default connect(mapStateToProps)(Box1);