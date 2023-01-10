import React from "react";
import '../css/HornedBeast.css'

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
      <div className="Horned-Beast">
        <h2>{this.props.title} <span onClick={this.handleLike}> ❤️ {this.state.numLikes}</span></h2>
        <img src={this.props.imageUrl} alt={this.props.title} title = {this.props.title}/>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;