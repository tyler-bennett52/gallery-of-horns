import React from "react";
import './HornedBeast.css'

class HornedBeast extends React.Component {
  render() {
    return (
      <div className="Horned-Beast">
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.title} title = {this.props.title}/>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;