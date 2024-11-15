import React, { useState, useEffect } from 'react';

import windImg from '../../src/assets/img/Windy/Windy (2).jpg';  
import sunImg from '../../src/assets/img/Sunny/Sunny (13).jpg';  
import snowImg from '../../src/assets/img/Snowy/Snow (17).jpg';  
import rainImg from '../../src/assets/img/Rainy/Raining (9).jpg';  
import cloudImg from '../../src/assets/img/Cloudy/Cloud (7).jpg';  
import fogImg from '../../src/assets/img/Foggy/foggy (7).jpg';  
import thounderImg from '../../src/assets/img/Stormy/Storm (2).jpg';
import tornadoImg from '../../src/assets/img/tornado/Tornado (2).jpg';

const bgImgList = {  
  'Thunderstorm': thounderImg,  
  'Drizzle': rainImg,  
  'Rain': rainImg,  
  'Snow': snowImg,  
  'Clear': sunImg,  
  'Clouds': cloudImg,  
  'Sand': windImg,  
  'Mist': fogImg,  
  'Smoke': fogImg,  
  'Haze': fogImg,  
  'Dust': fogImg,  
  'Fog': fogImg,  
  'Ash': fogImg,  
  'Squall': fogImg,  
  'Tornado': tornadoImg  
};  

const BgImgComp = (props) => {  
  const [bgImg, setBgImg] = useState(bgImgList[props.weatherCondition] || fogImg);  
  const [fade, setFade] = useState(false);  

  useEffect(() => {  
    const newBgImg = bgImgList[props.weatherCondition] || fogImg;  

    setFade(true);  // Trigger the fade effect  
    const timeout = setTimeout(() => {  
      setBgImg(newBgImg); // Change the background image after the fade out  
      setFade(false); // Reset fade state  
    }, 300); // Duration must match CSS transition time  

    return () => clearTimeout(timeout); // Cleanup timeout on unmount  
  }, [props.weatherCondition]);  

  return (  
    <div className={`bg-image-container ${fade ? 'fade' : ''}`}>  
      <img src={bgImg} id="bgImg" alt="Background" />  
    </div>  
  );  
}  

export default BgImgComp;