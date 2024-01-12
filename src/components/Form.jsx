import React, { useState } from 'react';

export const Form = ({onFormSubmit }) => {

  const [city, setCity] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit (city);
  }

  return (
    <form 
      className='flex justify-center items-center '
      onSubmit={handleSubmit}
    >
      <div className='w-full mt-3'>
        <input
          type='text'
          name='weather'
          id='weather'
          placeholder='Weather of a city'
          className='py-4 px-2 w-full border border-gray-300 rounded-md'
          onChange={(e) => setCity(e.target.value)}
        />
        <button 
          className='block mx-auto w-full bg-blue-500 py-3 rounded-md text-white font-bold uppercase hover:bg-blue-700 transition-all mt-3'
          type='submit'
        >Find</button>
      </div>
    </form>
  );
};
