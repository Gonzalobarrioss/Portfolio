import styled, { keyframes } from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    background: #0c0c0c;
    height: 800px;
    z-index: 1;

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const HeroH1 = styled.h1`
    color: #fff;
    text-align: center;
    
    margin: 0;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroH2 = styled.h2`
    font-family: consolas;
    color: #fff;
    line-height: 1em;
    text-decoration: none;
    font-size: 1em;
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: start;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroNeonBtnWrapper = styled.div`
    
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

const animate = keyframes`
    0%,99%{
        color: #fff;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff,
                    0 0 20px #00b3ff,
                    0 0 40px #00b3ff,
                    0 0 80px #00b3ff,
                    0 0 120px #00b3ff,
                    0 0 200px #00b3ff,
                    0 0 300px #00b3ff,
                    0 0 400px #00b3ff;
        
    }
    5%,95%{
        color: #111;
        filter: blur(0px);
        text-shadow: none;
    }

`
const animate2 = keyframes`
    0%,100%{
        color: #fff;
        filter: blur(1px);
        text-shadow: 0 0 10px #00b3ff,
                    0 0 20px #00b3ff,
                    0 0 40px #00b3ff,
                    0 0 80px #00b3ff,
                    0 0 120px #00b3ff,
                    0 0 200px #00b3ff,
                    0 0 300px #00b3ff,
                    0 0 400px #00b3ff;
        
    }
`

export const HeroGlowingLetter = styled.span`
    margin: 0;
    padding: 0;
    animation: ${animate} 2s linear;
    transition: 0.75s;

    &:nth-child(1){
        animation-delay: 0.25s;
    }
    &:nth-child(2){
        animation-delay: 0.5s;
    }
    &:nth-child(3){
        animation-delay: 0.75s;
    }
    &:nth-child(4){
        animation-delay: 1s;
    }
    &:nth-child(5){
        animation-delay: 1.25s;
    }
    &:nth-child(6){
        animation-delay: 1.5s;
    }
    &:nth-child(7){
        animation-delay: 1.75s;
    }

`
export const HeroGlowingText = styled.h1`
    padding: 0; 
    margin: 0;
    font-size: 2.5em;
    text-align: start;
    color: #111;
    animation: ${animate2} 3s linear infinite;
    animation-delay: 4s;
`


