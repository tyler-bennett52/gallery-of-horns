import React from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import bigHornedData from '../data';
import SelectedBeast from './SelectedBeast';





class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      selectedBeast: 'gotem',
      modalDetails: {
        key: 1,
        imageUrl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1
      }
    }

  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Main
          data={bigHornedData}
          handleCloseModal={this.handleCloseModal}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          modalDetails={this.state.modalDetails} />
        <Footer />
      </div>
    )
  }
  handleOpenModal = (name) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      modalDetails: {
        key: this.props.key,
        imageUrl: this.props.imageUrl,
        title: this.props.title,
        description: this.props.description
      }
    })
    console.log(this.state.modalDetails)
  }
  handleCloseModal = (name) => {
    this.setState({
      showModal: false,
      selectedBeast: name,
      modalDetails: {}
    })
  }
}


export default App;