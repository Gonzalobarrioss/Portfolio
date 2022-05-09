import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Button = styled.a`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #0f0;
    margin: 40px;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 2px;
    color: #fff;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
    transition: 0.5s;
    transition-delay: 0s;

    &:hover{
        transition-delay: 1.5s;
        color: #000;
        box-shadow: 0 0 10px #0f0,
                    0 0 20px #0f0,
                    0 0 40px #0f0,
                    0 0 80px #0f0,
                    0 0 160px #0f0;

        &:before{
            width: 60%;
            height: 100%;
            left: -2px;
            box-shadow: 5px 0 0 #0f0,
                        5px 0 0 #0f0;
            transition-delay: 0s,0.5s,1s,1s;
        }

        &:after{
            width: 60%;
            height: 100%;
            right: -2px;
            box-shadow: -5px 0 0 #0f0,
                        -5px 0 0 #0f0;
            transition-delay: 0s,0.5s,1s,1s;
        }
    }

    span{
        position: relative;
        z-index: 100;
    }

    &:before{
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 2px;
        background: #0f0;
        box-shadow: 5px -8px 0 #0f0,
                    5px 8px 0 #0f0;
        transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
        transition-delay: 1s,0.5s,0s,0s;
    }

    &:after{
        content: '';
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 2px;
        background: #0f0;
        box-shadow: -5px -8px 0 #0f0,
                    -5px 8px 0 #0f0;
        transition: width 0.5s, right 0.5s, height 0.5s, box-shadow 0.5s;
        transition-delay: 1s,0.5s,0s,0s;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
`