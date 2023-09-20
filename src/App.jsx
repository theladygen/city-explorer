import React from 'react';
import './App.css';
import Explorer from './components/Explorer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';



const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      location: null,
      error: null,
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
    .then(response => {
      this.setState({ location: response.data[0] });
    }).catch(error => {
      this.setState({ error: error });
    })
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <>
        <header>
          <h1>Choose Your Own Adventure with City Explorer!</h1>
        </header>

        <BrowserRouter>
          <form onSubmit={this.handleForm}>
            <input
              placeholder="Enter City Name"
              type="text"
              name="city"
              onChange={this.handleChange}
            />
            <button type='submit'>
              Explore!
            </button>
          </form>
            {this.state.error &&
          <Alert variant="danger"> 
            {`${this.state.error.response.status }: ${this.state.error.response.data.error}`}
          </Alert>
            }
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
