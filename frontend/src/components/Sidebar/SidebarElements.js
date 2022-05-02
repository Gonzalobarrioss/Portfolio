import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;

    font-size: 4em;
    text-decoration: none;
    line-height: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    
    color: transparent;
    -webkit-text-stroke: 1px rgba(255,255,255,0.5);

    transition: 0.2s ease-in-out;

    

    &:before {
        content: 'attr(data-text)';
        position: absolute;
        color: #fff;
        width: 0;
        overflow: hidden;
        transition: 1s;
        border-right: 8px solid var(--clr);
        -webkit-text-stroke: 1px var(--clr);
    }

    &:hover {
        width: 100%;
        filter: drop-shadow(0 0 25px var(--clr));
    }


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