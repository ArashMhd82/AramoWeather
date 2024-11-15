import '../src/assets/font/font.css';  
import { useEffect, useState } from "react";  
import { IoSearch } from "react-icons/io5";  

import HeadTitle from './Components/HeadTitle';  
import BriefCurrentInfo from './Components/BriefCurrentInfo';  
import WeatherDetails from './Components/WeatherDetails';  
import BgImgComp from './Components/BgImgComp';

function App() {  
  const platformName = 'AramoWeather';  
  const [city, setCity] = useState('Tehran');  
  const [data, setData] = useState({});  
  const apiKey = 'f1efa108334da71487be7f19f15126ba';  

  async function fetchApi() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  
    try {  
      const response = await fetch(url);  
      if (!response.ok) {  
        throw new Error('Network response was not ok');  
      }
      const datap = await response.json();  
      setData(datap);  
      console.log(data);  
    } catch (error) {  
      console.error("Error fetching data:", error);  
    }  
  }  

  async function clickHandle() {  
    const cityName = document.getElementById('SearchInp').value;  
    await setCity(cityName);  
    document.getElementById('SearchInp').value = '';  
  }  

  useEffect(() => {
    fetchApi();

  }, [city]);  

  return (  
    <>  
      <div id="bodyCont">  
        {data.weather && data.weather.length > 0 && (  
          <BgImgComp weatherCondition={data.weather[0].main} />  
        )}  
        <div id="firstContainer">  
          <div id='HeadCont'>  
            <HeadTitle title={platformName} />  
            {data.main && data.weather && (  
              <BriefCurrentInfo  
                degree={data.main.temp}  
                city={data.name}  
                weatherImgSrc={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}  
                weather={data.weather[0].main}  
              />  
            )}  
          </div>  
          <div id='WeatherCont'>  
            <div id="SearchCont">  
              <input type="text" id='SearchInp' placeholder='Another Location' />  
              <button id='SearchCityBtn' onClick={clickHandle}>  
                <IoSearch />  
              </button>  
            </div>  
            <div id='weatherDetails'>  
              <h5 className='barlow-semibold'>Weather Details</h5>  
  
              {data.name && data.main.temp_min && (  
                <WeatherDetails location={`${data.name} / ${data.sys.country}`} minTemp={data.main.temp_min} maxTemp={data.main.temp_max} humidity={data.main.humidity} description={data.weather[0].description} wind={data.wind.speed}/>  
              )}  
            </div>  
          </div>  
        </div>  
      </div>  
    </>  
  );
}  

export default App;