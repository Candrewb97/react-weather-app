import React, { useState } from 'react';

const Forecast = () => {
   let [responseObj, setResponseObj] = useState({});
   function getForecast() {
      // weather data fetch function
      fetch("https://api.openweathermap.org/data/2.5/wether?zip=" + Forecast + ",us&appid=" + 'api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid=2ac4988d438022af23a343ebb511f01c')

       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
   }


   return (
       // JSX code  
       <div>
           <h2>Get My Forecast</h2>
               <div>
                  {JSON.stringify(responseObj)}
               </div>
               <button onClick={getForecast}>Get Forecast</button>
       </div>

   )
}

export default Forecast;