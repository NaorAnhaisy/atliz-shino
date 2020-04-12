import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import './MapContainer.css'

class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 32.025860,
      lng: 34.748550,
      zoom: 15,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapContainer;