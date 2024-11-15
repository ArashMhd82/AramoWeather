import React from 'react'

const WeatherDetails = ({ location = 'Unknown', minTemp = 'N/A', maxTemp = 'N/A', humidity = 'N/A', description = 'No description', wind = 'N/A' }) => {
  return (
    <div>
      
        <ul className='barlow-regular'>
              
            <li>
              <div>
                City / Country
              </div>
              <div>
                {location}
              </div>
            </li>

            <li>
              <div>
                Weather
              </div>
              <div>
                {`${description}`}
              </div>
            </li>

            <li>
              <div>
                Min/Max Temperature
              </div>
              <div>
                {`${minTemp} / ${maxTemp}`}
              </div>
            </li>

            <li>
              <div>
                Humidity
              </div>
              <div>
                {`${humidity}%`}
              </div>
            </li>

            <li>
              <div>
                Wind
              </div>
              <div>
                {`${wind} km/h`}
              </div>
            </li>
        </ul>
    </div>
  )
}

export default WeatherDetails
