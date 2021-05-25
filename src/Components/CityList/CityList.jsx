import React from 'react'
import PropTypes from 'prop-types'
import Cityinfo from '../Cityinfo/Cityinfo'
import Weather from '../weather/Weather'
import Grid from '@material-ui/core/Grid'

const renderCityAndCountry = eventOnClickCity => cityAndCountry =>{
    const {city,country} = cityAndCountry 
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} xs={12}>
                    <Cityinfo city={city} country={country}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather temperature={35} state="sunny"/>
                </Grid>
            </Grid>
        </li>
        

    )
}


const CityList = ({cities,onClickCity}) => {
    return (
        <ul>
            {
                cities.map(
                    cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry) 
                    ) 
            }
        </ul>
    )
}


CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
