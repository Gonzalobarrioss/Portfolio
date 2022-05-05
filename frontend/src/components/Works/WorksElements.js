import styled from 'styled-components'
import ImgRickMorty from '../../images/rickmorty.jpg'


export const WorksWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    background: #0d0d0d;
`

export const WorksContainer = styled.div`
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
`
export const WorksContent = styled.div`
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: 0.5s;

    a{
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`
export const ImgBx = styled.div`
    position: absolute;
    border-radius: 15px;
    width: 100%;
    height: 100%;
`

export const WorksCard = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    border-radius: 15px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    overflow: hidden;

    &:nth-child(1){
        ${ImgBx}{
            background: no-repeat center/100% url("${ImgRickMorty}");
        }
    }

   

    &:hover{
        
        ${ImgBx}{
            opacity: 0.3;
        }
        ${WorksContent}{
            transform: translateY(0px);
            opacity: 1;
            
        }
    }
`
export const VideoBx = styled.video`
    position: absolute;
    border-radius: 15px;
    width: 100%:
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    
`

export const WorksH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 0;
    margin-bottom: 64px;
    padding: 24px 0;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const WorksH2 = styled.h2`
    position: absolute;
    top: -200px;
    right: 0;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
    pointer-events: none;
`

export const WorksH3 = styled.div`
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
`

export const WorksP = styled.p`
    font-size: 1em;
    color: #fff;
    font-weight: 300;
`