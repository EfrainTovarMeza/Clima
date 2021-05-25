import React from 'react'
import PropTypes from 'prop-types'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip} from 'recharts'

const ForecastChart = ({data}) => {
    return (
        <>
          <LineChart width={600} height={300} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} data={data} >
          <XAxis dataKey="dayHour"></XAxis>
              <YAxis></YAxis>
              <CartesianGrid></CartesianGrid>
              <Legend></Legend>
              <Tooltip></Tooltip>
              <Line type="monotone" dataKey="max" stroke="#ff0000" ></Line>
              <Line type="monotone" dataKey="min" stroke="#0000ff"> </Line>
          </LineChart>  
        </>
    )
}

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
          dayHour: PropTypes.string.isRequired,
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
      }),
  ).isRequired,
}

export default ForecastChart
