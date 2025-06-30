import React from 'react';
import Weather from './components/Weather';

export default function App() {
  return (
    <div className='w-11/12 max-w-lg px-6 py-12 mx-auto my-16 text-white shadow-lg rounded-3xl from-blue-200 via-blue-600 to-indigo-800 bg-gradient-to-br'>
      <Weather />
    </div>
  );
};
