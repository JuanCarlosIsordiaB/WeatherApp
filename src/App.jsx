

import React, { useState } from 'react';
import { Form } from './components/Form';
import axios from 'axios';
import { CityWeather } from './components/CityWeather';

const App = () => {

  const [weatherData, setWeatherData] = useState(null);


  const getWeather = (weather) => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=40010e7385ef4e36918183948232312&q=${weather}&aqi=no`)
      .then(res => setWeatherData(res.data) )
      .catch(err => console.log(err));
  }

  const onFormSubmit  = (city) => {
    //alertas
    getWeather(city);
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      
      <div className="text-center bg-white p-10 my-3 rounded-md">
        <h1 className="text-6xl font-bold text-blue-600 ">Weather<span className='text-blue-900'>App</span> </h1>
        <div className='mt-4'>
          <Form onFormSubmit={onFormSubmit } />
        </div>
        <div>
          <CityWeather weatherData={weatherData} />
        </div>

      </div>
    </div>
  );
}
export default App;