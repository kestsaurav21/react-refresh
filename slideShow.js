//Problem: https://www.hackerrank.com/challenges/react-slideshow-1/problem?isFullScreen=true


import React, { useState } from "react";
import { SLIDES_DATA } from "../constants";

function Slides({ slides = SLIDES_DATA }) {

  
   const [currSlide, setCurrSlide] = useState(0);

   const handleRestart = () => {
      setCurrSlide(0);
   }

   const handlePrev = () => {
    setCurrSlide((prev) => prev === 0 ? prev: prev -1)
   }

    const handleNext = () => {
    setCurrSlide((prev) => prev === slides.length-1 ? prev: prev+1)
   }

  
  return (
    <div>
      <div id="navigation" className="text-center">
        <button onClick={handleRestart} disabled={currSlide === 0}
        data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button onClick={handlePrev} data-testid="button-prev" disabled={currSlide === 0} className="small">
          Prev
        </button>
        <button onClick={handleNext} data-testid="button-next" disabled={currSlide===SLIDES_DATA.length-1} className="small">
          Next
        </button>
      </div>

      

      <div  id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currSlide].title}</h1>
        <p data-testid="text">{slides[currSlide].text}</p>
      </div>

      
      
    </div>
  );
}

export default Slides;
