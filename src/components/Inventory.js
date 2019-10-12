import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


class Inventory extends Component {

  // componentDidMount() {
  //   this.props.getCards();
  // }

  render() {
    return (
      <React.Fragment>
        {/* {console.log(
          this.props.user.cards.forEach(card => console.log(card.locations[0].location))
        )} */}
        {
          this.props.user.cards.map(card => console.log(card.locations[0]))
        }

        <h3>This is how we get the card names: </h3>
        <h4>{JSON.stringify(this.props.user.email)}</h4>
        <ul>
          {this.props.user.cards.map(card => { 
            return  <li> { JSON.stringify(card.cardName) } </li>
            })
          }
        </ul>
        <br></br>

        <h3>This is the corresponding location </h3>
        <h4>{JSON.stringify(this.props.user.email)}</h4>
        <ul>
          {this.props.user.cards.map(card => { 
            return  <li> { JSON.stringify(card.locations[0].location) } </li>
            })
          }
        </ul>
        <br></br>

        <h3>This is the corresponding quantity </h3>
        <h4>{JSON.stringify(this.props.user.email)}</h4>
        <ul>
          {this.props.user.cards.map(card => { 
            return  <li> { JSON.stringify(card.locations[0].quantity) } </li>
            })
          }
        </ul>
        <br></br>
        





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

// const mapDispatchToProps = dispatch => {
//   return {
//     getCards: () => dispatch(getCards())
//   }
// }


export default connect(mapStateToProps)(Inventory);
