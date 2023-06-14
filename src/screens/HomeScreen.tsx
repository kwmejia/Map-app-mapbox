import {
  BtnMyLocation,
  MapView,
  ReactIcon,
  SearchBar
} from "../components"

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactIcon />
      <SearchBar />
    </div>
  )
}
