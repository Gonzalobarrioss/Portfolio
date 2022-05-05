import styled, { keyframes } from 'styled-components'

const animate1 = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
`

const animate2 = keyframes`
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-200%);
    }
`

const animate3 = keyframes`
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(100%);
    }
`

const animate4 = keyframes`
    0%{
        transform: translateX(-200%);
    }
    100%{
        transform: translateX(0);
    }
`

export const BackgroundFaContainer = styled.div`
    position: relative;
    width: 100%;
    background: #0d0d0d;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1;
`
export const DivFaRow = styled.div`
    animation: ${animate1} 80s linear infinite;
    animation-delay: -80s;

    &:nth-child(1){
        animation: ${animate2} 80s linear infinite;
        animation-delay: -40s;
    }
`
export const BackgroundFaRow = styled.div`
    position: relative;
    top: -50%;
    width: 100%;
    display: flex;
    padding:  10px 0;
    white-space: nowrap;
    font-size: 64px;
    transform: rotate(-30deg);

    &:nth-child(even){
        ${DivFaRow}{
        animation: ${animate3} 80s linear infinite;
        animation-delay: -80s;
        }
    }

    &:nth-child(even){
        ${DivFaRow}:nth-child(2){
        animation: ${animate4} 80s linear infinite;
        animation-delay: -40s;
        }
    }


`

export const FaIcon = styled.i`
    color: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    padding: 0 5px;
    user-select: none;
    cursor: default;

    &:hover{
        transition: 0s;
        color: #0ff;
        text-shadow: 0 0 150px #00f;
    }
`
