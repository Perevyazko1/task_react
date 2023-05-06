import React,  { useEffect, useState } from 'react';
import axios from "axios";
import {usePosition} from "../usePosition";


const Weather = () => {
      const { latitude, longitude, error } = usePosition();

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=59.92631&lon=30.23019&appid=98006718f9a7b03ad28d74b60b37e6a3&units=metric`
    const [data,setData] = useState([])

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        // console.log(response.data.main.temp)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


    return (
        // eslint-disable-next-line no-unused-expressions,array-callback-return
        <table>
            <div>

                {/*Температура в вашем городе: {data.main}*/}
                {data.map(element => <div>{element.main}</div>)}
            </div>
        </table>
    );
};

export default Weather;