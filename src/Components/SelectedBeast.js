import React from "react";
import Modal from 'react-bootstrap/Modal';
import '../css/SelectedBeast.css'


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal style={{textAlign: "center"}} show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>{this.props.modalDetails.title}</Modal.Header>
        <img src={this.props.modalDetails.imageUrl} alt={this.props.modalDetails.title} />
        <Modal.Footer style={{margin: '0 auto'}}> {this.props.modalDetails.description}</Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;