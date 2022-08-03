import { useState } from "react"

import {Navigate} from "react-router-dom"

const StarMap = ({ROWS, COLS, squares, setPlanetId, reveal}) => {

  const [toPlanet, setToPlanet] = useState(null)

  if (toPlanet) {
    return (<Navigate to={`/Planet`} replace={true} />)
  }

  return (
    <div>
      <p> Star Map </p>
      {/*<img key="1" src={getUrl(1)} alt="planet 1" onClick={() => {setPlanetId(1)}} />
      <img key="2" src={getUrl(2)} alt="planet 2" onClick={() => { setPlanetId(2) }} />
      <img key="3" src={getUrl(3)} alt="planet 3" onClick={() => { setPlanetId(3) }} />
      <img key="4" src={getUrl(4)} alt="planet 4" onClick={() => { setPlanetId(4) }} />
      <img key="5" src={getUrl(5)} alt="planet 5" onClick={() => { setPlanetId(5) }} /> */}
      <div style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, 13vh)`,
        gridTemplateColumns: `repeat(${COLS}, 13vh)`,
        justifyContent: "center",
      }}>
        {squares.map((element, row) => {
          return element.map((el, col) => {
            return (<div key={`${row},${col}`}
            onClick={() => {
              if (el.type === "planet" && el.subtype !== "home") setPlanetId(el.img.slice(-1));
              if (el.hidden) {
                reveal(row, col, el.type === "planet")
              }
              if (el.type === "planet") setToPlanet(el.subtype);
            }} style={{
              // width: "10vh",
              // height: "10vh",
              border: "1px solid",
              display: "flex",
              placeContent: "center",
              backgroundImage: `${!el.hidden ? `url(${el.img})` :"url(space.jpeg)"}`,
              backgroundSize: "100% 100%",
            }}>
              <p style={{ fontSize: "0.2em" }}>{`${row}, ${col}`}</p>
            </div>)
          })
        })}
      </div>
    </div>
  )
}
export default StarMap