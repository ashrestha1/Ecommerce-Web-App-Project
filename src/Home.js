import React from 'react';
import './Home.css';
import wallpaper from './img/div_container.jpg';
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={wallpaper} alt="wallpaper"></img>

        <div className="home_row">
          <Product />
          {}
        </div>
        <div className="home_row">
          {}
          {}
          {}
        </div>
        <div className="home_row">{}</div>
      </div>
    </div>
  );
}

export default Home;
