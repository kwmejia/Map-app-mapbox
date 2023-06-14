import React from 'react'
import ReactDOM from 'react-dom/client'
import MapsApp from './MapsApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3dtZWppYSIsImEiOiJjbGl2eWk4eWwxb3dhM3Bxdm5kNGtpOXRrIn0.RaBQJtXzaW3dBHodhcQg2Q';


if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
