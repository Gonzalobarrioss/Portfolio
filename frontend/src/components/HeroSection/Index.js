import React, {useState} from 'react'
//import Video from '../../videos/video.mp4'
import { ButtonNeon } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroH2,
    HeroContent, 
    HeroH1, 
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
    <HeroContainer id="home">
        <HeroContent>
                <HeroH2>Hola, mi nombre es </HeroH2>
                <HeroGlowingText>
                    <HeroGlowingLetter>G</HeroGlowingLetter>
                    <HeroGlowingLetter>O</HeroGlowingLetter>
                    <HeroGlowingLetter>N</HeroGlowingLetter>
                    <HeroGlowingLetter>Z</HeroGlowingLetter>
                    <HeroGlowingLetter>A</HeroGlowingLetter>
                    <HeroGlowingLetter>L</HeroGlowingLetter>
                    <HeroGlowingLetter>O</HeroGlowingLetter>
                </HeroGlowingText>
            <HeroP>
                Soy un diseñador web especializado en landing page & 4 section web.
                CEO @eureka
            </HeroP>
            <HeroBtnWrapper>

                <ButtonNeon 
                    to='/' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    $smooth={true} 
                    duration={500}
                    $spy={true}
                    exact="true"
                    offset={-80}
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