import React from 'react';
import Slider from 'react-slick';
import img from 'C:/Users/User/project/new/src/images (1).jpeg';
import img1 from 'C:/Users/User/project/new/src/images.jpeg';
import img2 from './img.jpg';
import img3 from './img1.jpg';
import img4 from './img2.jpg';
import 'slick-carousel/slick/slick.css' ;
import 'slick-carousel/slick/slick-theme.css';
import './App.css'


function App() {
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
    <div className="App">
      <header className="App-header">
        <Slider {...settings}>
          <div>
            <img src={img} alt="cat" />
          </div>
          <div>
            <img src={img1} alt="cat" />
          </div>
          <div>
            <img src={img2} alt="cat" />
          </div>
          <div>
            <img src={img3} alt="cat" />
          </div>
          <div>
            <img src={img4} alt="cat" />
          </div>
        </Slider>
      </header>
    </div>
  );
}

export default App;
