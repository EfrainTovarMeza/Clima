import React from 'react'
import Forecast from './Forecast'

export default{
    title:"Forecast",
    component: Forecast
}

const forecastItemList=[
    {weekDay: "Lunes",hour:18,state:"sunny",temperature:17},
    {weekDay: "Martes",hour:6,state:"cloud",temperature:15},
    {weekDay: "Miercoles",hour:12,state:"cloudy",temperature:14},
    {weekDay: "Jueves",hour:18,state:"rain",temperature:4},
    {weekDay: "Viernes",hour:22,state:"sunny",temperature:17},
    {weekDay: "Sabado",hour:10,state:"cloud",temperature:15},
    {weekDay: "Domingo",hour:13,state:"rain",temperature:10},
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}></Forecast>