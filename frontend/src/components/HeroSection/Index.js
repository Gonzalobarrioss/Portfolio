import React, { useState } from "react";
//import Video from '../../videos/video.mp4'
import { ButtonNeon } from "../Buttons/ButtonElement";
import {
  HeroContainer,
  HeroH2,
  HeroContent,
  HeroH3,
  HeroP,
  HeroBtnWrapper,
  ArrowDown,
  ArrowRight,
  HeroGlowingText,
  ImgWrapper,
  ImgContent,
} from "./HeroElements";
import Tilt from "react-vanilla-tilt";

import Img from "../../assets/images/startup_life.svg";
import { MdFullscreenExit } from "react-icons/md";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  //<VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{width:'100%', height: '100%'}}/>

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH3>Hola, mi nombre es </HeroH3>
        <HeroGlowingText>Gonzalo Barrios</HeroGlowingText>
        <HeroH2>frontend developer</HeroH2>
        <HeroP>Hago paginas tales como landing page & 4 section web.</HeroP>

        <HeroBtnWrapper>
          <ButtonNeon
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CONTINUAR {hover ? <ArrowDown /> : <ArrowRight />}
          </ButtonNeon>
        </HeroBtnWrapper>

        <ImgWrapper>
          <Tilt
            style={{ display: "flex", zIndex: 15, cursor: "pointer" }}
            options={{ max: 400, speed: 400, glare: true, "max-glare": 1 }}
          >
            <ImgContent src={Img} />
          </Tilt>
        </ImgWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
