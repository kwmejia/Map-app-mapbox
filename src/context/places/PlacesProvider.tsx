import { useReducer, useEffect } from 'react';
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces';

export interface IPlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[]
}

const INITIAL_STATE: IPlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
}

interface IProps {
  children: JSX.Element | JSX.Element[]
}


export const PlacesProvider = ({ children }: IProps) => {

  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    onMounted();
  }, []);

  const onMounted = async () => {
    const lngLat = await getUserLocation();
    dispatch({ type: 'setUserLocation', payload: lngLat })
  }

  const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] })
      return []
    }
    if (!state.userLocation) throw new Error('No hay ubicaicon del usuario');

    dispatch({ type: 'setLoadingPlaces' })
    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });

    return resp.data.features;
  }

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm
      }}>
      {children}
    </PlacesContext.Provider>
  )
}
