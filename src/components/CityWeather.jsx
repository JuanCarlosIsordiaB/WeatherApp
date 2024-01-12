

import React from 'react'

export const CityWeather = ({weatherData}) => {
    if(!weatherData){
        return null;
    }
    const {location, current } = weatherData;
  return (
    <div className='bg-gray-200 mt-3 rounded-md'>
        <h1 className='font-bold py-5 text-xl'>{location.name}, {location.country}</h1>
        <div className='flex justify-center items-center gap-3'>

            <h2 className='font-bold text-xl'>{current.temp_c}</h2>
            <h2>{current.condition.text}</h2>
            <img src={`http:${current.condition.icon}`} alt="Weather Icon" />

            
        </div>
        <div className='border-md'>

            <iframe
                
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${location.lon}5!3d${location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                width="600" 
                height="450" 
                style={{ width: '100%', height: 'auto' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
  )
}
