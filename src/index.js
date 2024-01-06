import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './components/Garage'
import Header from './components/Header';
import FavoriteColor from './components/FavoriteColor';
import CarState from './components/CarState';
import Scooter from './components/Scooter';
import List from './components/List';
import Timer from './components/Timer';
import MyForm from './components/MyForm';
import Car1 from './components/Car1';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    {/* <Garage /> */}
    {/* <Header /> */}
    {/* <App /> */}
    <Car1 />
    {/* function_state */}
    {/* <FavoriteColor /> */}
    {/* class_state */}
    {/* <CarState /> */}
    {/* multiple_state */}
    {/* <Scooter /> */}
    {/* array_state */}
    {/* <List/> */}
    {/* useEffect_hook */}
    {/* <Timer/> */}
    {/* <MyForm/> */}
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
