import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import L from 'leaflet'

const customIcon = L.icon({
  iconUrl: 'map-point-svgrepo-com.svg'
});

const railroads = require('./geojson_data/Dauphin_Railroads.geojson.json');

console.log('railroads', railroads);

function App() {
  return (
    <div className="App">
      <MapContainer center={[40.505, -100.09]} zoom={13} >

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={railroads} />
        {/*<Marker icon={customIcon} position={[40.2822027,-76.9216249]}>
          <Popup>
            I am a pop-up!
          </Popup>
  </Marker>*/}
      </MapContainer>
    </div>
  );
}

export default App;
