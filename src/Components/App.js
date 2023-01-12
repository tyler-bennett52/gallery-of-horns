import React from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import bigHornedData from '../data';
import SelectedBeast from './SelectedBeast';
import { FloatingLabel, Form } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      data: bigHornedData,
      newData: bigHornedData,
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

  filterData = (event) => {
    if (event.target.value === 'all') {
      this.setState({newData: this.state.data})
    } else {    this.setState({
      newData: this.state.data.filter(obj => obj.horns === +event.target.value)
    })}

  }

  render() {
    return (
      <div className='App'>
        <Header
          filterData={this.filterData} />
        <FloatingLabel onChange={this.filterData} className="HornSelect" controlId="HornSelect" label="Horn Select" htmlFor="HornSelect">
          <Form.Select>
            <option value="all">All</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
            <option value='100'>More than 3</option>
          </Form.Select>
        </FloatingLabel>
        <Main
          data={this.state.newData}
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