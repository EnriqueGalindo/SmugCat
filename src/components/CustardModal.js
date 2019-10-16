import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import Box from "./Box"

export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.boxName}</Button>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody style={{ maxHeight: "calc(100vh - 200px)",
    overflowY: "auto" }}><Box boxName={this.props.boxName}/></ModalBody>
        </Modal>
      </div>
    );
  }
}
