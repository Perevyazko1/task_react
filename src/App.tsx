import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yandexmap from "./components/Yandexmap";
// import UsePositionDemo from "./components/Geolocation";
import { usePosition } from './usePosition';
import Weather from "./components/Weather";


function App() {

  return (

    <div className="App">
    <Yandexmap/>
      <Weather/>
    </div>
  );
}

export default App;
