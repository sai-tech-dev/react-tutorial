import Car from "./Car";
import Apple from "./Apple";
import Gun from "./Gun";

function Garage() {
  // const brand = 'Ferrari';
  // const color = 'White';
  // const carInfo = {}
  const isOpened = false;
  const carInfo = { brand: "Lambo", color: "White" };
  const appleInfo = { type: "Kashmir", color: "Green" };
  const carList = [
    {brand: "Lambo" , color:"Yellow"},
    {brand: "Audi" , color:"Black"},
    {brand: "Ferrari" , color:"White"},
  ];

  const numList = [1,2,3,4,5,6];

  const showCar = carInfo.brand !== undefined && carInfo.color !== undefined;
  return (
    <>
      <h1>This is second line</h1>
      {/* <Car brand={brand} color={color} /> */}
      {showCar && <Car carInfo={carInfo} /> }
      <Apple appleInfo={appleInfo} />
      <Gun />
      {isOpened ? <h2>Garage is Opened</h2> : <h2>Garage is Closed</h2>}
      <ul>
        { carList.map((carInfo) =>  <li key={carInfo.brand}><Car carInfo={carInfo} /></li>) }
      </ul>
      <ul>
        {numList.map((numList,index) => <p key={index}>{numList}</p>)}
      </ul>
    </>
  );
}

export default Garage;
