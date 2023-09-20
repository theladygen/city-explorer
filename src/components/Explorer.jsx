import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

let API_KEY = 'pk.54ab3afe18b4d83479755a9a4f0d3d56'
//access this privately (.vite.env <-rename???)

class Explorer extends React.Component {

  render() {

    let { location } = this.props;
    let lat = location ? location.lat : '';
    let lon = location ? location.lon : '';

//Map display: DON'T make a URL request - you will get back image data which you cannot parse as JSON
//map url is getting console error


    let staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}$zoom9`;

    return (
      <main>
        <Link to="/">Home</Link>
        {/* search is not working after clicking Home */}
        <section>
          <h2>Maps</h2>
          <ListGroup>
            <ListGroup.Item>City: {location ? location.display_name : 'No location set'}</ListGroup.Item>
            <ListGroup.Item>Latitude: {location ? location.lat : 'No location set'}</ListGroup.Item>
            <ListGroup.Item>Longitude: {location ? location.lon : 'No location set'}</ListGroup.Item>
          </ListGroup>
          <Container>
          <Image src={staticMapUrl} fluid alt="map image" />
          </Container>
        </section>
      </main>
    )
  }
}

export default Explorer;
