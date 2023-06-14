
export const Loading = () => {
  return (
    <div className="loading-map d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h3>Espere por favor</h3>
        <p>Localizando...</p>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}
