import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-y-6 sm:flex-row sm:items-center justify-evenly pt-40 px-5 p-40 h-screen text-center">
      <div className="bg-green-200 w-full sm:w-1/3 h-full">Ilustración</div>
      <div className="flex flex-col gap-12 sm:gap-20">
        <h1 className="font-bold text-6xl">Plant Art</h1>
        <p className="text-2xl">Descripción descripción decripción</p>
        <div className="flex flex-row justify-between">
          <button className="bg-pink-900 w-32 text-white">Servicios</button>
          <button className="bg-pink-900 w-32 text-white">Productos</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
