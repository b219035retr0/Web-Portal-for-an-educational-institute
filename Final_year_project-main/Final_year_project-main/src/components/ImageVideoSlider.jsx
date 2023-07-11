import React from "react";
import "./codepen.css"

const ImageSlider = () => {
  
 

  return (
    <div  className ="home" style={{backgorundColor:"black",width:"100%",overflowX:"hidden",overflowY:"hidden",display:"flex",justifyContent:"center",marginTop:"5vh" }}>
      <div className="cascade-slider_container" id="cascade-slider">
        <img className="imageee" src="https://iiit-placement-website-v2.vercel.app/_next/image?url=%2Finfra%2F10.jpg&w=2048&q=75" alt="" />
        <div className="cascade-slider_slides">
        <h1 className="h1style">Electronics & Telecommunication </h1>
        {/* <div className="h1style"> <VisionMission/></div> */}
       
        
         <div>
         {/* {images.map((image, index) => (
            <div
              key={image.id}
              className={`cascade-slider_item ${
                index === currentIndex ? "now" : ""
              } ${
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === images.length - 1)
                  ? "prev"
                  : ""
              } ${
                index === currentIndex + 1 ||
                (currentIndex === images.length - 1 && index === 0)
                  ? "next"
                  : ""
              }`}
            >
              <img className="cimage" src={image.src} alt={image.alt} />
            </div>
          ))} */}
         </div>
        
        </div>

        {/* <ol className="cascade-slider_nav">
          {images.map((image, index) => (
            <li
              key={image.id}
              className={`cascade-slider_dot ${
                index === currentIndex ? "cur" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ol> */}


  
    </div>

    </div>
  );
};

export default ImageSlider;
