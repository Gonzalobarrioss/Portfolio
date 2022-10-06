import styled from "styled-components";

export const LeftContainer = styled.div`
    width: 40px;
    position: fixed;
    display:block;
    bottom: 0;
    left: 40px;
    right: auto;
    z-index: 10;
    color: #a8b2d1;

    @media (max-width: 1080px){
        left: 20px;
        right: auto;
    }
    &:before{
        box-sizing: inherit;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const List = styled.ul`
    display:flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;


    &:after{
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: #fff;
    }

    
`

export const SocialMediaLeft = styled.a`
    padding: 10px;
    font-size: 24px;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: 0.5s;

    &:last-child{
        margin-bottom: 20px;
    }

    &:hover{
        transform: scale(1.1) translateY(-5px);
        //color: #03e9f4;
        color: #fff;
    }
    
`