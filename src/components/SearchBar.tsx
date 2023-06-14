import { useRef, ChangeEvent, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResolve } from '.';

export const SearchBar = () => {

  const debounceRef = useRef<number>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      //todo: Buscar consulta
      console.log(await searchPlacesByTerm(event.target.value))
    }, 350);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChanged}
      />

      <SearchResolve />
    </div>
  )
}
