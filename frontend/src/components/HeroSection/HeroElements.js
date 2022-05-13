import styled, { keyframes } from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


const showContent = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`


export const HeroContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 1000px;
    display: flex;
    position: relative;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    animation: ${showContent} ease 7s;
`


export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin: 0;
    z-index: 1;

    ${HeroBtnWrapper}
    {
        align-items: center;
    }
`

export const HeroH3 = styled.h3`
    font-family: consolas;
    color: #fff;
    line-height: 1em;
    text-decoration: none;
    font-size: 1em;
    
    animation: ${showContent} 2s ease;

    @media (min-width: 1440px) {
        //font-size: clamp(80px, 18vw, 100px);
        font-size: 1.8em;
    }

    @media (min-width: 1024px) and (max-width: 1439px){
        //font-size: clamp(40px, 8vw, 80px);
        font-size: 1.5em;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        //font-size: clamp(40px, 8vw, 80px);
        font-size: 1.3em;
    }

    @media screen and (max-width: 424px){
        font-size: 14px;
    }

    @media screen and (max-width: 374px){
        font-size: 12px;
    }
    
`

export const HeroH2 = styled.h2`
    color: #8892b0;
    text-align: start;
    font-size: clamp(30px, 8vw, 70px);
    line-height: 0.9;
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: 600;

    animation: ${showContent} 5s ease;
    @media (min-width: 1440px) {
        //font-size: clamp(80px, 18vw, 100px);
    }

    @media (min-width: 1024px) and (max-width: 1439px){
        font-size: 56px;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 46px;
    }

    @media screen and (max-width: 424px){
        font-size: 32px;
    }

    @media screen and (max-width: 374px){
        font-size: 24px;
    }
`

export const HeroP = styled.p`
    margin-top: 10px;
    color: #8892b0;
    font-size: 18px;
    text-align: start;
    padding: 0;
    max-width: 600px;
    animation: ${showContent} 6s ease;
    @media (min-width: 1440px) {
        font-size: 36px;
    }

    @media (min-width: 1024px) and (max-width: 1439px){
        font-size: 30px;
        margin-top: 20px;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 24px;
    }

    @media screen and (max-width: 424px){
        font-size: 20px;
    }

    @media screen and (max-width: 374px){
        font-size: 16px;
    }
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
                    0 0 200px #00b3ff;                    
    }
`

export const HeroGlowingLetter = styled.span`
    margin: 0;
    padding: 0;
    transition: 0.75s; 

    @media screen and (min-width: 769px){
        
        animation: ${animate} linear 2s;
        letter-spacing: 2px;

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
    }

`
export const HeroGlowingText = styled.h1`

    //ORIENTADO A MOBILE L (425-768)


    padding: 0; 
    margin: 0;
    font-weight: 600;
    line-height: 1.1;
    font-size: clamp(40px, 8vw, 80px);
    text-align: start;
    color: #ccd6f6;
    animation: ${showContent} linear 3s;

    @media (min-width: 1440px) {
        //font-size: clamp(80px, 18vw, 100px);
    }

    @media (min-width: 1024px) and (max-width: 1439px){
        //font-size: clamp(40px, 8vw, 80px);
    }

    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 48px;
    }

    @media screen and (max-width: 424px){
        font-size: 36px;
    }

    @media screen and (max-width: 374px){
        font-size: 26px;
    }
    
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    

    @media (min-width: 1440px) {
        font-size: 42px;    
    }

    @media (min-width: 1024px) and (max-width: 1439px){
        font-size: 32px;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 22px;
    }

    @media screen and (max-width: 424px){
        font-size: 18px;
    }

    @media screen and (max-width: 374px){
        margin-left: 4px;
        font-size: 18px;
    }
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

    @media (min-width: 1440px) {
        font-size: 42px;
    }

    @media (min-width: 1024px) and (max-width: 1439px){
        font-size: 32px;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 22px;
    }

    @media screen and (max-width: 424px){
        font-size: 18px;
    }

    @media screen and (max-width: 374px){
        margin-left: 4px;
        font-size: 18px;
    }
`