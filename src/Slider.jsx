import React, { useState, useEffect } from "react";
import styled from "styled-components";
import r1 from "./assets/r-1.jpg";
import r2 from "./assets/r-2.jpg";
import r3 from "./assets/r-3.jpg";
import SliderText from "./SliderText";

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 512px;
  margin-top: 20px;
`;

const SliderContainer = styled.div`
  width: 60%;
  height: 512px;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const images = [r1, r2, r3];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderWrapper>
      <SliderText activeIndex={activeIndex} />
      <SliderContainer>
        {images.map((image, index) => (
          <Slide key={index} active={index === activeIndex}>
            <SlideImage src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
