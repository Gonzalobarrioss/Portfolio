import styled from "styled-components";

export const RightContainer = styled.div`
    width: 40px;
    position: fixed;
    display:block;
    bottom: 0;
    right: 40px;
    left: auto;
    z-index: 10;
    color: #a8b2d1;

    @media (max-width: 1080px){
        right: 20px;
        left: auto;
    }
    
    &:before{
        box-sizing: inherit;
    }
 
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const EmailContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: #a8b2d1;
    margin: 0;
    padding: 0;

    &:after{
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: #fff;
    }
`

export const SocialMediaRight = styled.a`
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    font-size: 24px;
    color: inherit;
    position: relative;
    transition: 0.5s;
    &:last-child{
        margin-bottom: 20px;
    }
`
export const Email = styled.a`
    color: #a8b2d1;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    margin: 20px auto;
    padding: 10px;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: 0.5s;

    -webkit-text-stroke: 1px rgba(255,255,255,0.1);

    &:before{
        content: 'gonza.barrios.geb@gmail.com';
        position: absolute;
        //color: #03e9f4;
        color: #fff;
        height: 0;
        overflow: hidden;
        transition: 1s;
        writing-mode: vertical-rl;
    }

    &:hover{
        transform: scale(1.08);
        &:before{
            height: 100%;
          
        }
    }
    

`