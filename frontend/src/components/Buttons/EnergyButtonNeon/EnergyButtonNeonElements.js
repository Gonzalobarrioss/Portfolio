import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Button = styled.a`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #03e9f4;
    margin: 40px;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 2px;
    color: #8892b0; 
    -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
    transition: 0.5s;
    transition-delay: 0s;

    &:hover{
        transition-delay: 1.5s;
        color: #fff;
        box-shadow: 0 0 10px #03e9f4,
                    0 0 20px #03e9f4,
                    0 0 40px #03e9f4,
                    0 0 80px #03e9f4,
                    0 0 160px #03e9f4;

        &:before{
            width: 60%;
            height: 100%;
            left: -2px;
            box-shadow: 5px 0 0 #03e9f4,
                        5px 0 0 #03e9f4;
            transition-delay: 0s,0.5s,1s,1s;
        }

        &:after{
            width: 60%;
            height: 100%;
            right: -2px;
            box-shadow: -5px 0 0 #03e9f4,
                        -5px 0 0 #03e9f4;
            transition-delay: 0s,0.5s,1s,1s;
        }
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
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
        background: #03e9f4;
        box-shadow: 5px -8px 0 #03e9f4,
                    5px 8px 0 #03e9f4;
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
        background: #03e9f4;
        box-shadow: -5px -8px 0 #03e9f4,
                    -5px 8px 0 #03e9f4;
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