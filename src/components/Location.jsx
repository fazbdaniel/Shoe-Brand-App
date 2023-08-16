import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Location extends React.Component {
  render() {
    return (
        <div className='Location' id='location'>
            <Map
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