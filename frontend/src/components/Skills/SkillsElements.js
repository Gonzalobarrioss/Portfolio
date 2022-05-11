import styled from 'styled-components'

export const SkillsTitle = styled.p`
    display: flex;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 16px;
    text-transform: uppercase;
    color: #fff;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
    text-shadow: 0 0 10px #00b3ff, 
                0 0 20px #00b3ff, 
                0 0 40px #00b3ff, 
                0 0 80px #00b3ff, 
                0 0 120px #00b3ff, 
                0 0 200px #00b3ff, 
                0 0 300px #00b3ff;

    &:after{
        content: '';
        display: block;
        position: relative;
        top: 5px;
        width: 300px;
        height: 1px;
        margin-left: 20px;
        background: #8892b0;
                
        @media screen and (max-width: 600px) {
            margin-left: 10px;
        }
                
        @media screen and (max-width: 768px) {
            width: 355px;
        }
    }
}
`

export const SkillsSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0;
    min-height: 100vh;
    background: #0a192f;

    &:before{
        content: '';
        position: absolute;
        top: 45%;
        width: 100%;
        height: 50px;
        background: #2bd2ff;
        filter: blur(2px);
    }
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;        
`
export const SkillsText = styled.text`
    position: absolute;
    bottom: -42px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    padding: 30px 20px 10px;
    background: #f00;
    border-radius: 10px;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    z-index: 1;
    pointer-events: none;
    transition: bottom 0.5s, z-index 0s, transform 0.5s, padding 0.5s;
    transition-delay: 0.5s,0.5s,0s,0.5s;
    color: #fff;
`

export const SkillsCard = styled.div`
    position: relative;
    width: 250px;
    height: 300px;
    text-align: center;
    z-index: 10;
    margin: 20px 20px 60px;

    &:hover{
        ${SkillsText}{
            transition-delay: 0s,0.5s,0.5s,0s;
            bottom: -70px;
            z-index: 11;
            transform: translateX(-50%) translateY(-50px);
            padding: 10px 20px 10px;
        }
    }

    &:nth-child(1){
        ${SkillsText}{
            background: #2bd2ff;
        }

        svg circle:nth-child(2){
            stroke-dashoffset: calc(440px - (440px * 90) / 100 );
        }
    }
    &:nth-child(2){
        ${SkillsText}{
            background: #2bd2ff;
        }
        svg circle:nth-child(2){
            stroke-dashoffset: calc(440px - (440px * 85) / 100 );
        }
    }
    &:nth-child(3){
        ${SkillsText}{
            background: #2bd2ff;
        }
        svg circle:nth-child(2){
            stroke-dashoffset: calc(440px - (440px * 95) / 100 );
        }
    }
`

export const SkillsBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 10;
    border-radius: 10px;
`

export const SkillsPercent = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 100;

    svg{
        position: relative;
        width: 150px;
        height: 150px; 

        circle{
            width: 100%;
            height: 100%;
            fill: none;
            stroke-width: 10;
            stroke: rgba(255, 255, 255, 0.05);
            transform: translate(5px,5px);
            stroke-linecap: round;

            &:nth-child(2){
                stroke: #fff;
                stroke-dasharray: 440px;
                stroke-dashoffset: 440px;
            }
        }
    }

    
`

export const SkillsNumber = styled.text`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SkillsH2 = styled.h2`
    color: #fff;
    font-weight: 700;
    font-size: 50px;

    span{
        font-size: 24px;
    }
`


