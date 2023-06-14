import reactIcon from "../assets/react.svg";

export const ReactIcon = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '100px',
      textAlign: 'center'
    }}>
      <img
        src={reactIcon}
        alt="Reactr Logo"

      />
      <p className="fw-bold">Kevin Mejia</p>
    </div>
  )
}
