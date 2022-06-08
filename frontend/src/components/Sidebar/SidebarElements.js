import styled, {keyframes} from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'


export const SidebarContainer = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
   
    min-height: 100vh;
    background: #0d0d0d;
    
    position: fixed;
    z-index: 10000;
    width: 100%;

    
    
    transition: 0.5s ease-in-out;
    
    opacity: ${({ isOpen }) => (isOpen ? '95%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;   
`
export const SidebarMenu = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0;
    align-items: center;
`

export const SidebarLink = styled(LinkS)`
    position: relative;
    list-style: none;
`

const animate = keyframes`
    0%,100%{
        border-right: none;
    }
    50%{
        border-right: 8px solid #03e9f4;
    }
`


export const ButtonLink = styled.span`
    position: relative;
    
    cursor:pointer;
    font-size: 2.5em;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #8892b0;

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
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
export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0d0d0d;
`

export const SocialMediaWrap = styled.ul`
    padding:0;
    position: relative;
    display: flex;
    gap: 50px;
`

export const ButtonSocialMedia = styled.a`
    position: relative;
    text-decoration: none;
    color: ${props => props.color};
    z-index: 10;
    font-size: 2em;
    transition: 0.5s; 
`

export const SocialMediaLink = styled.li`
    position: relative;
    list-style: none;  
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        z-index: 10000;
        transform: scale(0.75);
        ${ButtonSocialMedia}{
            font-size: 3em;
            filter: drop-shadow(0 0 20px ${props => props.color}) drop-shadow(0 0 40px ${props => props.color}) drop-shadow(0 0 60px ${props => props.color});
        }
    }

    &:before{
        content: '';
        position: absolute;
        inset: 30px;
        box-shadow: 0 0 0 10px ${props => props.color}, 0 0 0 20px #222, 0 0 0 22px ${props => props.color};
        transition: 0.5s;
    }

    &:hover:before{
        inset: 0px;
    }

    &:after{
        content: '';
        position: absolute;
        inset: 0;
        background: #0d0d0d;
        transform: rotate(45deg);
    }

`
