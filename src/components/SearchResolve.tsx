import { useContext, useState } from 'react';
import { Feature } from '../interfaces';
import { MapContext, PlacesContext } from '../context';

export const SearchResolve = () => {

  const [activeId, setactiveId] = useState('');

  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoint } = useContext(MapContext);


  const onPlaceClick = (place: Feature) => {
    setactiveId(place.id)
    const [lng, lat] = place.center;

    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    })
  }

  const getRoute = async (place: Feature) => {
    if (!userLocation) return
    const [lng, lat] = place.center;
    await getRouteBetweenPoint(userLocation, [lng, lat]);
  }

  if (isLoadingPlaces) {
    return (
      <div className="w-100 text-center my-2">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (places.length === 0) {
    return <></>
  }

  return (
    <ul className="list-group mt-3">
      {
        places.map(place => (
          <li
            key={place.id}
            className={`list-group-item list-group-item-action pointer ${activeId === place.id && 'active'}`}
            onClick={() => onPlaceClick(place)}
          >
            <h6>{place.text_es}</h6>
            <p className=" fs-6">
              {place.place_name_es}
            </p>

            <button
              className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'} `}
              onClick={() => getRoute(place)}
            >
              Direcciones
            </button>
          </li>
        ))
      }
    </ul>
  )
}
