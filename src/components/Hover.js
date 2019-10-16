import React from "react";
import { Tooltip, Button } from "shards-react";
import { handleJsonResponse } from "../actions/constants"

export default class TooltipExample extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false,
            imageURL: "",
            price: 0
        };
    }
    componentDidMount() {


        // console.log('stuff')

        fetch("https://api.scryfall.com/cards/named?fuzzy=" + this.props.cardName)
            .then(handleJsonResponse)
            .then(skryfalCard => {
                console.log('got this far')
                this.setState({
                    imageURL: skryfalCard.image_uris.small,
                    price: skryfalCard.prices.usd
                })
            })
        // .catch(err => {
        //     return Promise.reject(dispatch({ 
        //         type: GET_CARD_DATA_FAIL,
        //         payload: err
        //     }));
        // });

    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div>
                <Tooltip
                    placement="left"
                    open={this.state.open}
                    target={this.props.target}
                    toggle={this.toggle}
                >
                    <img src={this.state.imageURL} />
                    <p>price ${this.state.price}</p>
                </Tooltip>
            </div>
        );
    }
}