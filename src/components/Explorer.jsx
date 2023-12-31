import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Weather from './Weather';

let API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {
  render() {
    let { location, forecasts } = this.props;
    let lat = location ? location.lat : '';
    let lon = location ? location.lon : '';

    let staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}&zoom9`;

    return (
      <main>
        <section>
          <h2>Maps</h2>
          <ListGroup>
            <ListGroup.Item>
              City: {location ? location.display_name : 'No location set'}
            </ListGroup.Item>
            <ListGroup.Item>
              Latitude: {location ? location.lat : 'No location set'}
            </ListGroup.Item>
            <ListGroup.Item>
              Longitude: {location ? location.lon : 'No location set'}
            </ListGroup.Item>
          </ListGroup>
          <Container>
            <Image src={staticMapUrl} fluid alt="map image" />
            <Weather forecasts={forecasts} />
          </Container>
        </section>
      </main>
    );
  }
}

export default Explorer;
