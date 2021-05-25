import React from 'react'
import Weather from './Weather'
//import weather from './Weather'
export default{
    title:"Weather",
    component: Weather
}

export const WeatherExample = () => <Weather temperature={25} state="cloud"></Weather>