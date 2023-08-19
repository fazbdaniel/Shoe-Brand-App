import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './location.css';

const mapStyles = {
  width: '80%',
  height: '80%',
  borderRadius: '1%',
  marginLeft: '9%',
  paddingRight: 'none'
};

export class Location extends React.Component {
  render() {
    return (
        <div className='Location' id='location'>
            <Map 
            className='map'
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(Location);