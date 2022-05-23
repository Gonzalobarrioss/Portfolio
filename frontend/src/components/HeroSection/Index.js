import React, {useState} from 'react'
//import Video from '../../videos/video.mp4'
import { ButtonNeon } from '../Buttons/ButtonElement'
import { 
    HeroContainer, 
    HeroH2,
    HeroContent, 
    HeroH3, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    HeroGlowingText,
    HeroGlowingLetter
} from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    //<VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{width:'100%', height: '100%'}}/>
    
  return (
    <HeroContainer id="home" >
        <HeroContent>
            <HeroH3>Hola, mi nombre es </HeroH3>
                <HeroGlowingText>
                    {/*<HeroGlowingLetter>G</HeroGlowingLetter>
                    <HeroGlowingLetter>O</HeroGlowingLetter>
                    <HeroGlowingLetter>N</HeroGlowingLetter>
                    <HeroGlowingLetter>Z</HeroGlowingLetter>
                    <HeroGlowingLetter>A</HeroGlowingLetter>
                    <HeroGlowingLetter>L</HeroGlowingLetter>
  <HeroGlowingLetter>O</HeroGlowingLetter>*/}
                    Gonzalo Barrios.
                </HeroGlowingText>
                <HeroH2>Hago paginas creativas</HeroH2>
            <HeroP>
                Soy un desarrollador web especializado en landing page & 4 section web.
            </HeroP>
            <HeroBtnWrapper>

                <ButtonNeon 
                    to='about' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
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
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonNeon>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection