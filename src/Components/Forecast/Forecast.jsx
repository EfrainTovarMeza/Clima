import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Forecastiten from '../ForeCastItem/Forecastiten'
import shape from '@material-ui/core/styles/shape'
const renderForecastItem = forecast =>{
    const {weekDay, hour, state, temperature} = forecast
    return(
        <Grid item key={`${weekDay}${hour}`}>
            <Forecastiten weekDay={weekDay}
                          hour={hour} 
                          state={state}
                          temperature={temperature}
                          />
        </Grid>
    )
}
const Forecast = ({forecastItemList}) => {
    return (
        <Grid container justify="center" alignItems="center">
            {
               forecastItemList.map(forecast => renderForecastItem(forecast)) 
            }
        </Grid>
    )
}

Forecast.propTypes = {
    
    forecastItemList: PropTypes.arrayOf(
        PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired
        }),
    ).isRequired
    
}

export default Forecast
