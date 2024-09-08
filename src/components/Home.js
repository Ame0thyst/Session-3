// import React, { useState } from "react";
// import Project from "./Project";
// import Slider from "react-slick";
// import "./Home.css";

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Pengaturan slider
//   const settings = {
//     dots: true, // Nonaktifkan dots jika tidak diperlukan
//     infinite: true,
//     speed: 10000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed:0, // Kecepatan scroll otomatis
//     arrows: false, // Nonaktifkan panah navigasi jika diinginkan
//   };

//   const brands = [
//     { id: 1, src: "/assets/gambar/session4.jpg", alt: "Brand 1" },
//     { id: 2, src: "/assets/gambar/session4.jpg", alt: "Brand 2" },
//     { id: 1, src: "/assets/gambar/session4.jpg", alt: "Brand 3" },
//     { id: 2, src: "/assets/gambar/session4.jpg", alt: "Brand 4" },
//   ];

//   return (
//     <div className={`${darkMode ? "text-white" : "bg-white text-black "} h-screen`}>
//       <div className="relative h-5/6 flex flex-col justify-center items-start bg-gradient-to-r from-slate-400 to-slate-50 p-10 ">
//         {/* Bagian 75% background warna ungu */}
//         <div className="w-screen ">
//           <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
//           <p className="text-pretty w-1/3 ">Ut exercitation enim esse et ex culpa. Nulla irure deserunt ex labore sunt pariatur esse exercitation exercitation. Do quis occaecat occaecat aute sit eiusmod aliqua Lorem ut officia duis ex quis aute. Labore do ullamco exercitation eu eiusmod cillum consequat ullamco anim nisi ut.</p>
//         </div>

//         <div className="absolute left-3/4 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-transparent p-5 rounded-lg w-84 h-84">
//           <img
//             src="/assets/gambar/1.jpg"
//             alt="Profile"
//             className="w-3/4 h-3/4 object-cover rounded-lg cursor-pointer hover:brightness-50"
//           />

//           <div className="absolute top-0 left-0 transform -translate-x-3/4 -translate-y-2/4 bg-white p-0 w-36 h-36 shadow-lg rounded-lg">
//             <img
//               src="/assets/gambar/1.jpg"
//               alt="Additional"
//               className="w-full h-full object-cover rounded-lg cursor-pointer hover:brightness-50"
//             />
//           </div>
//           <div className="absolute top-auto left-0 transform -translate-x-1/4 -translate-y-3/4 bg-white p-0 w-24 h-24 shadow-lg rounded-lg">
//             <img
//               src="/assets/gambar/1.jpg"
//               alt="Additional"
//               className="w-full h-full object-cover rounded-lg cursor-pointer hover:brightness-50"
//             />
//           </div>
//         </div>

//         <button
//           onClick={toggleDarkMode}
//           className="absolute top-5 right-5 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
//         >
//           {darkMode ? "🌞" : "🌜"}
//         </button>
//       </div>

//       {/* Daftar brand */}
//       <div className="bg-slate-950">
        
//         <Slider {...settings}>
//           {brands.map((brand) => (
//             <div key={brand.id} className="px-3 ">
//               <img src={brand.src} alt={brand.alt} className="w-32 h-32 object-cover rounded-md " />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <Project />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Project from "./Project";
import Slider from "react-slick";
import "./Home.css";


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Pengaturan slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };

  const brands = [
    { id: 1, src: "/assets/gambar/session4.jpg", alt: "Brand 1" },
    { id: 2, src: "/assets/gambar/session4.jpg", alt: "Brand 2" },
    { id: 3, src: "/assets/gambar/session4.jpg", alt: "Brand 3" },
    { id: 4, src: "/assets/gambar/session4.jpg", alt: "Brand 4" },
  ];

  return (
    <div className={`${darkMode ? "bg-dark text-dark" : "bg-light text-light"} h-screen`}>
      <div className="relative h-5/6 flex flex-col justify-center items-start p-10">
        {/* Bagian 75% background */}
        <div className="w-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
          <p className="text-pretty w-1/3">
           haii.., saya Gilang Wiko Wicaksono. sangat tertarik dengan pembelajaran terkait web dan mobile
          </p>
        </div>

        <div className="absolute left-3/4 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-transparent p-5 rounded-lg w-84 h-84">
          <img
            src="/assets/gambar//ikoo.png"
            alt="Profile"
            className="w-screen h-screen object-cover rounded-lg cursor-pointer hover:brightness-50"
          />

          <div className="absolute top-1/4 left-3/4 transform -translate-x-0 -translate-y-0 bg-white p-0 w-26 h-26 shadow-2xl rounded">
            <img
              src="/assets/gambar/dev.png"
              alt="Additional"
              className="w-full h-full object-cover rounded cursor-pointer hover:brightness-50"
            />
          </div>
          <div className="absolute top-auto left-0 transform -translate-x-3/4 -translate-y-60 bg-white p-0 w-24 h-24 shadow-lg rounded-full">
            <img
              src="/assets/gambar/1.jpg"
              alt="Additional"
              className="w-full h-full object-cover rounded-full cursor-pointer hover:brightness-50"
            />
          </div>
        </div>

        <button
          onClick={toggleDarkMode}
          className="absolute top-5 right-5 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
        >
          {darkMode ? "🌞" : "🌜"}
        </button>
      </div>

      {/* Daftar brand */}
      <div className="bg-slate-950">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="px-3">
              <img src={brand.src} alt={brand.alt} className="w-32 h-32 object-cover rounded-md" />
            </div>
          ))}
        </Slider>
      </div>

      <Project darkMode={darkMode} />
    </div>
  );
};

export default Home;
