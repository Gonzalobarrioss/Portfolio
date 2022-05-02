import React, {useState} from 'react'
//import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    //VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
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
            <HeroH1>Virtual Banking Made East</HeroH1>
            <HeroP>
                Sing up for a new account today and receive $250 in credit towards your next payment
            </HeroP>
            <HeroBtnWrapper>
                <Button 
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
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection