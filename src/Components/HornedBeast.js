import React from "react";
import '../css/HornedBeast.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      numLikes: 0
    }
  }
  handleLike = () => {
    this.setState({
      isLiked: true,
      numLikes: this.state.numLikes + 1
    });
  }

  render() {
    return (
      <Card className="Horned-Beast" style={{ width: '18rem' }}>
        <Card.Img onClick={this.props.handleOpenModal} variant="top" src={this.props.imageUrl} />
        <Card.Body>
          <Card.Title onClick={this.props.handleOpenModal}>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button className="Card-Button" variant="" onClick={this.handleLike}>{this.state.isLiked ? '❤️' : '🤍'} {this.state.numLikes}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;

