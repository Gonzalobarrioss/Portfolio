import React, {useState} from 'react'
//import Video from '../../videos/video.mp4'
import { ButtonNeon } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    //VideoBg, 
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
        <HeroBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Hi, my name is 
                <HeroGlowingText>
                    <HeroGlowingLetter>G</HeroGlowingLetter>
                    <HeroGlowingLetter>O</HeroGlowingLetter>
                    <HeroGlowingLetter>N</HeroGlowingLetter>
                    <HeroGlowingLetter>Z</HeroGlowingLetter>
                    <HeroGlowingLetter>A</HeroGlowingLetter>
                    <HeroGlowingLetter>L</HeroGlowingLetter>
                    <HeroGlowingLetter>O</HeroGlowingLetter>
                </HeroGlowingText>
            </HeroH1>
            <HeroP>
                I love develop webpages
            </HeroP>
            <HeroBtnWrapper>

                <ButtonNeon 
                    to='singup' 
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