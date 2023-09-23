import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Weather extends React.Component {
  render() {
    let { forecasts } = this.props;

    return forecasts ? (
      <ListGroup>
        {forecasts.map((forecast, index) => (
          <ListGroup.Item key={index}>
            {forecast.date} {forecast.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    ) : (
      <ListGroup>
        <ListGroup.Item>No forecasts!</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default Weather;
