import React from 'react'
import PropTypes from 'prop-types'
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from 'react-icons/wi'
const stateByname = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiDaySunny
}

const renderstate = state =>{
    const IconSatate= stateByname[state]
    return <IconSatate/>
}
const Iconos = ({state}) => {
    return (
        <>
        {renderstate(state)} 
        </>
             
          
    )
}
export const validValues=[
    "colud",
    "cloudy",
    "fog",
    "sunny",
    "rain"
]

Iconos.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default Iconos
