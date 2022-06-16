import React from 'react';
import Carousel from 'react-grid-carousel';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Carrousel() {
  const [cities, setCities] = useState()
  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
      .then(response => setCities(response.data.response.cities))
  }, [])

  return (
    <div className="CarrouselContainer" style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
      <h1 className='titleCarrousel'>Popular MyTineraries</h1>
      <Carousel cols={2} rows={2} gap={10} autoplay={3000} loop
        mobileBreakpoint={200} responsiveLayout={[
          {
            breakpoint: 768,
            cols: 1,
            rows: 4,
            gap: 10,
            loop: true,
            autoplay: 2000
          }
        ]}>
        {cities?.map(citie =>
          <Carousel.Item key={citie._id}>
            <img width="100%" src={citie.image} alt={citie.name} style={{ height: "39vh", borderRadius: "30px" }} />
            <p className='nameCities'>{citie.name}</p>
          </Carousel.Item>)
        }
      </Carousel>
    </div>)

}

export default Carrousel