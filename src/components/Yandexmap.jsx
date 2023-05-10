import React from 'react';
import { YMaps, Map } from "@pbe/react-yandex-maps";
import {usePosition} from "../usePosition";


const Yandexmap = () => {
        const { latitude, longitude, error } = usePosition();
        console.log(latitude)
    return (
  <YMaps>
    <div className={"map"}>
        {error}
        <h2>Your geolocation</h2>
      <Map width="100%" defaultState={{ center: [latitude,longitude], zoom: 12 }} />
    </div>
  </YMaps>
    );
};

export default Yandexmap;

