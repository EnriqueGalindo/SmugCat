import React, { Component } from "react";
import { connect } from "react-redux";

class Inventory extends Component {
  render() {
    return (
      <>
        <p>This is your inventory component.</p>
        <p>Here is your user's data structure:</p>
        <pre>{JSON.stringify(this.props.user, null, "\t")}</pre>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.login
  };
};

export default connect(mapStateToProps)(Inventory);
