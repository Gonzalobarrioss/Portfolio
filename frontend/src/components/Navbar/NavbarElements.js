import styled, { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollnav}) => (scrollnav ? 'transparent' : '#0a192f')};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: absolute;
    top: 0;
    z-index: 10;

        
    transform:  ${({scrollnav}) => (scrollnav ? 'translateY(-100px)' : 'translateY(0%)')};
    transition: 0.75s;
    

    @media screen and (min-width: 769px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    width: 100%;
    height:100%;
    padding: 0 16px;
    max-width: 1600px;
    transition: 0.5s;
    
    &.active{
        background: #fff;
    }
`

export const NavLogo = styled.div`
    display: flex;
    color: #fff;
    font-size: 24px;
    align-items: center;
    justify-content: center;    
    cursor: pointer;
    width: 42px;
    height: 42px;
    
    
    font-weight: bold;
    text-decoration: none;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
       display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    background: #0a192f;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    border: 1px solid #fff;
    text-decoration: none;
    display: flex;
    position: relative;

    &:hover {
        span{
            &:nth-child(1){
                transform: scaleY(1);
                transform-origin: bottom;
                transition: transform 0.5s;
            }
            &:nth-child(2){
                transform: scaleX(1);
                transform-origin: left;
                transition: transform 0.5s;
            }
            &:nth-child(3){
                transform: scaleY(1);
                transform-origin: bottom;
                transition: transform 0.5s;
                transition-delay: 0.5s;
            }
            &:nth-child(4){
                transform: scaleX(1);
                transform-origin: left;
                transition: transform 0.5s;
                transition-delay: 0.5s;
            }
        }
    }

    span{
        display: block;
        position: absolute;
        background: #03e9f4;
        

        &:nth-child(1){
            left: -1px;
            bottom: 0;
            width: 1px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.5s;
        }
        &:nth-child(2){
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s;
        }
        &:nth-child(3){
            right: -1px;
            bottom: 0;
            width: 1px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.5s;
            transition-delay: 0.5s;
        }
        &:nth-child(4){
            left: 0;
            top: -1px;
            width: 100%;
            height: 1px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s;
            transition-delay: 0.5s;
        }

    }
`

export const MobileIcon = styled.div`
    display: flex;
    position: relative;
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
    
    @media screen and (min-width: 769px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    top: 0;
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }

    &.active li a{
        color: #0a192f;
    }

`
export const NavItem = styled.li`
    height: 80px;
    
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1em;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        color: #15cdfc;
    }
`

const animate = keyframes`
    0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%{
        color: #0e3742;
        text-shadow: none;
    }
    18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%{
        color: #fff;
        text-shadow: 0 0 10px #03bcf4,
            0 0 10px #03bcf4,
            0 0 20px #03bcf4,
            0 0 40px #03bcf4,
            0 0 80px #03bcf4,
            0 0 160px #03bcf4;
    }
`

export const GlowingText = styled.h3`
    position: relative;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 0 0 10px #03bcf4,
            0 0 10px #03bcf4,
            0 0 20px #03bcf4,
            0 0 40px #03bcf4,
            0 0 80px #03bcf4,
            0 0 160px #03bcf4;
    text-transform: uppercase;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    line-height: 0.75em;
    animation: ${animate} 10s linear;
`

export const Indicator = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(to bottom, #0a192f, #0a192f);
    border-radius: 50%;
    transform: scale(0.9);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5),
                inset 0 4px 4px rgba(0, 0, 0, 0.1),
                inset 0 -4px 4px rgba(0, 0, 0, 0.1);
    transition: 0.5s;


    @media screen and (min-width: 769px){
        width: 24px;
        height: 24px;
    }
`

export const ToggleContainer = styled.div`
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    border-radius: 24px;
    background: #f9f9f9;
    border: 1px solid #222;
    transition: 0.5s;
    cursor: pointer;
    box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
                inset 0 8px 8px rgba(0, 0, 0, 0.2),
                inset 0 -4px 4px rgba(0, 0, 0, 0.2);

    &.active{
        background: #0a192f;
        box-shadow: inset 0 2px 60px rgba(0, 0, 0, 0.1),
                    inset 0 2px 8px rgba(0, 0, 0, 0.1),
                    inset 0 -4px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid #f9f9f9;

        ${Indicator}{
            left: 20px;
            background: linear-gradient(to bottom, #eaeaea, #f9f9f9);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1),
                    inset 0 4px 4px rgba(0, 0, 0, 0.2),
                    inset 0 -4px 4px rgba(0, 0, 0, 0.2);
        }
    }

    @media screen and (min-width: 769px){
        width: 48px;
        height: 24px;

        &.active{
            ${Indicator}{
                left: 24px;
            }
        }
    }
`





