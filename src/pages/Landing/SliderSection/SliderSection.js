import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SliderSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateScrollY = () => {
      const sectionRefRect = sectionRef.current.getBoundingClientRect();

      sliderRef.current.style.transform = `translateX(${sectionRefRect.top}px`;

      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, [scrollY]);

  return (
    <StyledSliderSection ref={sectionRef}>
      <Slider ref={sliderRef}>
        <SliderText>BSM SEONGNAM</SliderText>
      </Slider>
    </StyledSliderSection>
  );
};

export default SliderSection;

const StyledSliderSection = styled.section`
  width: 100vw;
  height: 15vw;
  overflow: hidden;
`;

const Slider = styled.div`
  top: 0;
  left: 0;
`;

const SliderText = styled.span`
  position: absolute;
  top: 0;
  left: -40px;
  padding: 0 40px;
  font-size: 10vw;
  font-weight: 900;
  white-space: nowrap;
`;
