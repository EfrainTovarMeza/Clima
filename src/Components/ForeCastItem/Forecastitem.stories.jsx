import React from 'react'
import Forescatiten from './Forecastiten'
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from 'react-icons/wi'
export default{
    title:"Forescatiten",
    component: Forescatiten
}

export const ForescastItemExample = () => <Forescatiten
                                            weekDay = "Lunes"
                                            hour = {10}
                                            state = "rain"
                                            temperature = {20}

                                            />
