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
      modalDetails: {
        key: 1,
        imageUrl: null,
        title: null,
        description: null,
        keyword: null,
        horns: null
      }
    }

  }
  handleOpenModal = (imageUrl, title, description) => {
    this.setState({
      showModal: true,
      modalDetails: {
        imageUrl: imageUrl,
        title: title,
        description: description
      }
    })
  }
 
  handleCloseModal = (name) => {
    this.setState({
      showModal: false,
      selectedBeast: name,
      modalDetails: {}
    })
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


}


export default App;