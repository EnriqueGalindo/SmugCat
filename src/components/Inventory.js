import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"



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


        <p>This is your inventory component.</p>
        <p>Here is your user's data structure:</p>
        <pre>{JSON.stringify(this.props.user, null, "\t")}</pre>


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
