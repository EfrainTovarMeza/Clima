import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}
const cyties=[
    {city:"CDMX", country:"Mexico"},
    {city:"Bogota", country:"Colombia"},
    {city:"Madrid", country:"España"},
    {city:"New York", country:"USA"},
    {city:"Tokio", country:"Japon"},
    {city:"Paris", country:"Francia"}
]
export const CityListExample = () => <CityList cities={cyties} onClickCity={action("click en city")}/>