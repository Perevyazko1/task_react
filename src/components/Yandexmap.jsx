import React from 'react';
import { YMaps, Map } from "@pbe/react-yandex-maps";
import {usePosition} from "../usePosition";


const Yandexmap = () => {
        const { latitude, longitude, error } = usePosition();
    return (
  <YMaps>
    <div>
        {error}
      <Map defaultState={{ center: [`${latitude}`,`${longitude}`], zoom: 12 }} />
    </div>
  </YMaps>
    );
};

export default Yandexmap;

