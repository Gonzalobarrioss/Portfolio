import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const ButtonNeon = styled(Link)`
    position: relative;
    display: inline-block;
    padding: 20px 30px;
    margin-bottom: 20px;
    color: #03e9f4;
    font-size: 24px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

    &:hover{
        background: #03e9f4;
        color: #050801;
        box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
    }
`