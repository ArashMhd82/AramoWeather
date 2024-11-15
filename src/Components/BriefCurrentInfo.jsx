import React from 'react'

const BriefCurrentInfo = (props) => {


    
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    return `${hour}:${min} - ${month}/${date}/${year}`;
  }

  return (
    <div id="CityCurrentInfo">
        
        <div>
            <h1 className='barlow-regular' style={{fontSize: '60px'}}>
                {props.degree | 0}<sup>&#176;</sup>
            </h1>
        </div>
        
        <div>
            
            <div>
                <h3 className='barlow-regular'>
                    {props.city}
                </h3>
            </div>
            
            <div>
                <h5 className='barlow-light'>
                    {getDate()}
                </h5>
            </div>
        </div>
        
        <div id='WeatherCondition'>
            <div id='WeatherConditionPic'>
                <img src={props.weatherImgSrc} alt="" />
            </div>

            <div>
                <h5 className='barlow-regular'>
                    {props.weather}
                </h5>
            </div>
        </div>
    </div>
  )
}

export default BriefCurrentInfo
