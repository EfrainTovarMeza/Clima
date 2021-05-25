import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Iconos,{validValues} from '../Iconos/Iconos'
import {IconContext} from 'react-icons'

const Forecastiten = ({weekDay,hour,state,temperature}) => {
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
            <Typography>{hour} hrs</Typography>
            </Grid>
            <Grid item>
            <IconContext.Provider value={{size:'4em'}}>
            <Iconos state={state}/>
            </IconContext.Provider>
            </Grid>
            <Grid item>
            <Typography>{temperature}</Typography>
            </Grid>
        </Grid>
    )
}

Forecastiten.propTypes = {
weekDay: PropTypes.string.isRequired,
hour: PropTypes.number.isRequired,
state: PropTypes.oneOf(validValues).isRequired,
temmperature: PropTypes.number.isRequired,

}

export default Forecastiten
