import React, { Component } from 'react';
import PropTypes from 'prop-types';
// https://blog.cloudboost.io/adding-custom-maps-to-react-app-using-mapbox-bb978845e7ad
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

import Pin from './Pin';

// MapBox token
const TOKEN = 'pk.eyJ1Ijoic3RldmVwMzA3IiwiYSI6ImNqamJkOGJ2cjBmdTQzd3FrZzR2dWV6aWcifQ.0Fh_nT0TJqPBBAA2ipVKJw';

class Map extends Component {

  constructor() {
    super();
    this.state = {
      viewport: {
        width:  window.innerWidth,
        height: window.innerHeight,
        latitude: 59.9343,
        longitude: 30.3351,
        zoom: 12,
      },
    };
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ viewport: this.extendViewport({height: window.innerHeight, width:  window.innerWidth})})
  };

  extendViewport = (newData) => Object.assign(this.state.viewport, newData);

  render() {
    const { viewport } = this.state;
    const { bridges } = this.props;
    return <div className='Map' role='application'>
      <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/basic-v8"
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.setState({viewport: this.extendViewport(viewport)})}
        >
        { bridges.map(({id, title, location}) =>
          <Marker longitude={location.lon} latitude={location.lat} offsetTop={-20} offsetLeft={-20} key={id}>
            <Pin bridgeName={title} id={id}/>
          </Marker>)
        }
      </MapGL>
    </div>
  }
}

Map.propTypes = {
  bridges: PropTypes.array.isRequired
};

export default Map;