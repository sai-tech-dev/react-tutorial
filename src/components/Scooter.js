import { useState } from "react";

function Scooter() {
  // const [color, setColor] = useState("Black")
  // const [brand, setBrand] = useState("Honda")
  // const [model, setModel] = useState("Dio")
  // const [year, setYear] = useState("2022")
  const [scooter, setScooter] = useState({
    color: "Black",
    brand: "Honda",
    model: "Dio",
    year: "2022",
  });

  function updateColor(){
    setScooter(previousState => {
        return {...previousState,color:"Yellow"}
    })
  }

  // console.log("Check State",scooter);

  return (
    <>
      <h1>My Scooter</h1>
      <p>Color: {scooter.color}</p>
      <p>Brand: {scooter.brand}</p>
      <p>Model: {scooter.model}</p>
      <p>Year: {scooter.year}</p>
      <button onClick={updateColor}>Change Color</button>
    </>
  );
}

export default Scooter;
