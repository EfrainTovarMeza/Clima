import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({humidity,wind}) => {
    return (
        <>
           <Typography>Humedad: {humidity}</Typography>
           <Typography>Viento: {wind}</Typography>
        </>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherDetails
