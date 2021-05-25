import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

//agregar un conetxto
import {IconContext} from 'react-icons'
import Iconos,{validValues} from '../Iconos/Iconos'

const Weather = ({temperature,state}) => {
    return (
        <>
          <IconContext.Provider value={{size:'4em'}}>
           <Iconos state={state}/>   
          </IconContext.Provider>
          <Typography variant="h3" display="inline">{temperature}</Typography>

        </>
    )
}


Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired

}

export default Weather
