import axios from "axios";

const directiosApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1Ijoia3dtZWppYSIsImEiOiJjbGl2eWk4eWwxb3dhM3Bxdm5kNGtpOXRrIn0.RaBQJtXzaW3dBHodhcQg2Q'
  }
})

export default directiosApi;