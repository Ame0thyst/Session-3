import React from 'react';
import Slider from 'react-slick';


const slideImages = [
  '/assets/gambar/9.jpg',
  '/assets/gambar/10.jpg',
  '/assets/gambar/11.jpg',
  
  
];


const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };
  
  return (
    <div className="p-0 relative w-full h-full overflow-hidden ">
      <Slider {...settings}>
        {slideImages.map((image, index) => (
          <div key={index} className="w-full h-screen bg-current pt-1" >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover bg-cover"
            />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Dashboard;
