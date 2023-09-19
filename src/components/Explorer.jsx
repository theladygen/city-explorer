import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Explorer extends React.Component {

  render() {

    let { location } = this.props;
    return (
      <main>
        <Link to="/">Home</Link>
        <section>
          <h2>Maps</h2>
          {/* <p>{this.props.query}</p> */}
          <ListGroup>
            <ListGroup.Item>City: {location ? location.display_name : 'No location set'}</ListGroup.Item>
            <ListGroup.Item>Latitude: {location ? location.lat : 'No location set'}</ListGroup.Item>
            <ListGroup.Item>Longitude: {location ? location.lon : 'No location set'}</ListGroup.Item>
          </ListGroup>
          <img src={location ? location.icon : "https://placehold.co/600x400" } alt="placeholder map image"/>
        </section>
        {/* <section> class 5 video @ 2:27
          <h2>Weather</h2>
        </section> */}
      </main>
    )
  }
}

export default Explorer;
