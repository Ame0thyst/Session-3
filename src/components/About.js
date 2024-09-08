import React, { useState } from 'react';

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`page about flex flex-col items-center p-8 ${isDarkMode ? 'bg-slate-600 text-white' : 'bg-gradient-to-r from-slate-400 to-slate-50 text-gray-900'}`}>
      <div className="flex justify-between items-center w-full max-w-6xl mb-8">
        <h1 className="text-2xl font-bold ">About Us</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-300 rounded-lg focus:outline-none"
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl">
        <div className="relative lg:w-1/2 lg:pl-16 lg:pr-8 lg:py-8">
          <img
            src="/assets/gambar//7.jpg" 
            alt="About Me"
            className="w-screen h-3/5 max-w-sm lg:max-w-md lg:ml-auto lg:mr-0 rounded-md"
            style={{ marginLeft: '10%', marginRight: '5%' }}
          />
          <h1 className="absolute left-1/3 transform -translate-x-3/4 top-1/2 -translate-y-3/4 text-4xl font-bold text-black lg:text-5xl lg:font-extrabold font-mono">
            SAYA SANGAT SUKA MENGEKSPLOR HAL BARU
          </h1>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:py-8">
          <p className="text-xl lg:text-2xl font-mono">
            Saya adalah seorang pengembang perangkat lunak dengan pengalaman dalam berbagai teknologi. Saya
            sangat bersemangat dalam menyelesaikan masalah dan terus belajar hal-hal baru dalam bidang
            teknologi. Saya memiliki keterampilan dalam pengembangan web, pengembangan perangkat lunak, dan
            banyak lagi.
          </p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-600 p-6 rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 font-mono text-white">Kolom 1</h2>
            <p className='text-white'>
              Lorem sit mollit est sint officia reprehenderit sint esse eu veniam tempor duis. Velit dolore pariatur sint officia labore consectetur tempor ea Lorem esse. Reprehenderit fugiat sit commodo aliqua commodo aliqua. Exercitation amet deserunt dolore sunt in. Ut qui voluptate ex reprehenderit adipisicing excepteur nulla enim sunt. Deserunt eu id sunt enim ipsum exercitation nisi cillum culpa est cupidatat adipisicing sit sint.

Laboris minim labore do ex. Ex non cillum minim amet nisi. Do velit fugiat nostrud incididunt esse commodo enim laborum laboris elit in. Est in in aliqua pariatur mollit sint occaecat ut fugiat est. Ad pariatur adipisicing fugiat eu sunt do. Cupidatat deserunt duis cillum sit proident aliquip sint mollit. Fugiat dolore aliquip aute labore cillum enim ea qui consequat irure ex.
            </p>
          </div>
          <div className="bg-slate-600 p-6 rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 font-mono text-white">Kolom 2</h2>
            <p className='text-white'>
              Adipisicing est ex duis ullamco incididunt cupidatat eu dolor ea eu Lorem irure. Minim aliqua voluptate laborum sunt. Esse laboris nostrud sit esse irure sit exercitation Lorem ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
