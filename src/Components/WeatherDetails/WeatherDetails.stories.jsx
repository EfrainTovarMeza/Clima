import React from 'react'
import { Component } from 'react'
import WeatherDetails from './WeatherDetails'

export default{
    title: "WeatherDetails",
    Component: WeatherDetails
}
export const WeatherDetailsExample = () => <WeatherDetails humidity={"20 %"} wind={"30 km/hr"}/>