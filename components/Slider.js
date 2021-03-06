import React, { useRef } from "react";

import useSlider from "../components/hooks/useSlider";

const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  );

  return (
    <div className="slider" ref={slideImage} id="slider">
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <i className="fas fa-angle-left">B</i>
        </button>
        <div className="slider--feature">
          <h1 className="feature--title">My Completed Projects</h1>
          <p ref={slideText} className="feature--text"></p>
          {/* <button className="feature__btn">Get started</button> */}
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <i className="fas fa-angle-right">N</i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
