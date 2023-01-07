import React from "react";
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>{this.props.modalDetails.title}Hello</Modal.Header>
      </Modal>
    )
  }
}

export default SelectedBeast;