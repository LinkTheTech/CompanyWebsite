import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";


const Carousel = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];
  return (
    <div>
    <SimpleImageSlider
      style={{paddingTop:"90px", paddingBottom:"100px"}}
      width={"100%"}
      height={520}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  </div>
  )
}

export default Carousel