import React from 'react'
import ForecastChart from './ForecastChart'

export default{
    title: "ForescastChart",
    component: ForecastChart
}

//datos de eejmplo para la funcionalidad de grafica
const data = [
    {
        dayHour: "Jue 18",
        min: 14,
        max: 22,
    },
    {
        dayHour: "Vie 19",
        min: 16,
        max: 25,
    },
    {
        dayHour: "Sab 20",
        min: 18,
        max: 26,
    },
    {
        dayHour: "Dom 21",
        min: 10,
        max: 18,
    },
    {
        dayHour: "Lun 18",
        min: 6,
        max: 14,
    }
];
export const ForecastCharExample = () => <ForecastChart data={data} ></ForecastChart>