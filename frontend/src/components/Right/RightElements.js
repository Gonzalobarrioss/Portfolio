import styled from "styled-components";

export const RightContainer = styled.div`
    width: 40px;
    position: fixed;
    display:block;
    bottom: 0;
    right: 40px;
    left: auto;
    z-index: 10;
    color: #a8b2d1;

    @media (max-width: 1080px){
        right: 20px;
        left: auto;
    }
    &:before{
        box-sizing: inherit;
    }
`

export const List = styled.ul`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
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

export const SocialMediaRight = styled.a`
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: 0.5s;

    &:last-child{
        margin-bottom: 20px;
    }
`