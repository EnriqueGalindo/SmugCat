import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class Box1 extends Component {
    getCardsatLocation  (cards, boxName)  {
        let cardNameArray = []
        let quantityArray = []
        let cardObj = {}
        let final = []
      
        for (let i = 0; i < cards.length; i++) {
          for (let j = 0; j < cards[i].locations.length; j++) {
            if (cards[i].locations[j].location == boxName) {
              cardNameArray.push(cards[i].cardName)
              quantityArray.push(cards[i].locations[j].quantity)
              
            }
          }
        }
        for(let i = 0; i< cardNameArray.length; i++){
            cardObj.cardName = cardNameArray[i];
            cardObj.quantity = quantityArray[i];
            final.push(cardObj)
        }
        return  
      }
    render() {
        return (
        <React.Fragment>
           <div>
               {() => this.getCardsatLocation(this.props.user.cards, "box1")}
           </div>
           
        </React.Fragment>
    );
    }
}
 