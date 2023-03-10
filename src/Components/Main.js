import React from "react";
import HornedBeast from "./HornedBeast";
import '../css/Main.css'


class Main extends React.Component {
  render() {
    const hornedComponents = this.props.data.map(obj => {
      return (
        <HornedBeast
          key={obj._id}
          imageUrl={obj.image_url}
          title={obj.title}
          description={obj.description}
          keyword={obj.keyword}
          horns={obj.horns}
          handleOpenModal = {this.props.handleOpenModal} />
      )
    })

    return (
      <div className="Main">
        {[...hornedComponents]}
      </div>
    );
  }
}


export default Main;