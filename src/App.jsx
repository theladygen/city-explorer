import React from 'react';
import './App.css';
import Explorer from './components/Explorer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'pk.54ab3afe18b4d83479755a9a4f0d3d56';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      location: null,
    };
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  handleForm = (e) => {
    console.log('Form Submitted');
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
    .then(response => {
      console.log('SUCCESS: ', response.data);
      this.setState({ location: response.data[0] });
    }).catch(error => {
      console.log('UH OH: ', error);
    })
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    console.log('City Explorer', this.state);
    return (
      <>
        <header>
          <h1>Choose Your Own Adventure with City Explorer!</h1>
        </header>

        {/* {this.state.searchQuery 
          ? <Explorer/> 
          : <p>Please Enter a Location</p>} */}
        <BrowserRouter>
          <form onSubmit={this.handleForm}>
            <input
              placeholder="Enter City Name"
              type="text"
              name="city"
              onChange={this.handleChange}
            />
            <button type='submit'>
              Search
              {/* <Link to="/search">Explore!</Link> */}
            </button>
          </form>
          <Routes>
            <Route exact path="/search" element={<Explorer location={this.state.location} query={this.state.searchQuery}/>} />
            <Route path="/" element={<p>Please Enter a Location</p>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
