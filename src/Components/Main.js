import React from "react";
import HornedBeast from "./HornedBeast";
import bigHornedData from "../data";
import '../css/Main.css'

const hornedComponents = bigHornedData.map(obj => {
  return (
    <HornedBeast
      key={obj._id}
      imageUrl={obj.image_url}
      title={obj.title}
      description={obj.description}
      keyword={obj.keyword}
      horns={obj.horns} />
  )
})

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {[...hornedComponents]}
      </div>
    );
  }
}


export default Main;