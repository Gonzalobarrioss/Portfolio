import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0-2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0-2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`

export const ButtonNeon = styled(LinkS)`
    position: relative;
    display: flex;
    padding: 20px 30px;
    margin-bottom: 10px;
    //color: #03e9f4;
    color: #ccd6f6;

    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    border-radius: 5px;
    cursor: pointer;
    

    &:hover{
        //background: #03e9f4;
        background: #ccd6f6;
        color: #050801;
        /*box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;*/
        box-shadow: 0 0 5px rgba(0,0,0,0.2),
            0 0 25px rgba(255,255,255,0.9),
            0 0 50px rgba(255,255,255,0.2),
            0 0 200px rgba(0,0,0,0.9);
        
        
    }

    
    @media screen and (min-width: 768px){
        font-size: 22px;
    }

    @media screen and (min-width: 1024px){
        font-size: 28px;
        padding: 25px 40px;
    }

    @media screen and (min-width: 1440px){
        font-size: 24px;
        padding: 25px 40px;
    }

    

    @media screen and (max-width: 375px){
        font-size: 14px;
        padding: 15px 20px;
    }
`