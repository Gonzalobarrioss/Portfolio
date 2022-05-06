import styled, { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollnav}) => (scrollnav ? 'transparent' : '#0d0d0d')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
        
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1800px;
    
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 680px) {
        transform:  ${({scrollnav}) => (scrollnav ? 'translateY(-100px)' : 'translateY(0%)')};
        transition: 0.75s;
    }
`

export const MobileIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 50%;
    right: 50%;
    list-style: none;
    text-align: center;
    margin: 0 10px;
    padding:0 20px;
    
    transform:  ${({scrollnav}) => (scrollnav ? 'translateY(-100px)' : 'translateY(0%)')};
    transition: 0.75s;

    @media screen and (max-width: 768px) {
        display: none;
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
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        border-bottom: 3px solid #01bf71;
        
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
       display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
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
    color: #0e3742;
    text-transform: uppercase;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    line-height: 0.75em;
    animation: ${animate} 10s linear infinite;
`







