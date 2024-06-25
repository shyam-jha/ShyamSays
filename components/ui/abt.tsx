import React from 'react';

const Feature = ({ title, sub, text }) => (
  <div className="w-full flex justify-between items-start flex-col m-4 sm:my-4">
    <div className="flex-1 max-w-[180px] mr-8 sm:max-w-full sm:mr-0">
      <div className="w-10 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 shadow-md mb-1" />
      <h1 className="font-sans font-medium text-lg leading-6 tracking-tight text-white mb-2 sm:text-base sm:leading-5">{title}</h1>
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">{sub}</p>
    </div>
    <div className="flex-2 max-w-[390px] flex sm:max-w-full">
      <p className="font-sans font-medium text-base leading-6 text-white sm:text-base sm:leading-5">{text}</p>
    </div>
  </div>
);

export default Feature;
