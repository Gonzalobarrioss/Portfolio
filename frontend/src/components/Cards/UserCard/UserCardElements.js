import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px 0;
`
export const CardContent = styled.div`
    position: absolute;
    bottom: -160px;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    flex-direction: column;
    backdrop-filter: blur(15px);
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: bottom 0.5s;
    transition-delay: 0.8s;
`


export const CardH3 = styled.h3`
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 15px;
    line-height: 1.1em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(-20px);
    transition-delay: 0.6s;

    span{
        font-size: 12px;
        font-weight: 300;
        text-transform: initial;
    }
`

export const CardItem = styled.li`
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    transition: 0.5s;
    opacity: 0;
    transition-delay: calc(0.2s * var(--i));
`

export const Card = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        ${CardContent}{
            bottom: 0px;
            transition-delay: 0s;
        }

        ${CardH3}{
            opacity: 1;
            transform: translateY(0px);
        }
        ${CardItem}{
            transform: translateY(0px);
            opacity: 1;
        }
    }
`

export const ImgBx = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 300px;
        height: 400px;
        object-fit: cover;
    }
`



export const ContentBx = styled.div``


export const CardList = styled.ul`
    position: relative;
    bottom: 10px;
    display: flex;
    padding: 0;
`



export const SocialMediaItem = styled.a`
    color: #fff;
    font-size: 24px;
`