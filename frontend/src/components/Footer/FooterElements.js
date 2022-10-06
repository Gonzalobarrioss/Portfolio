import styled from 'styled-components'

export const FooterWrap = styled.div`
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 24px auto;
`


export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    flex-direction: column;
`


export const WebsiteRights = styled.small`

    

    display: inline-block;
    position: relative;

    font-size:16px;
    color: #8892b0;
    margin: 16px 0;
    transition: 0.5s;
    overflow: hidden;
    
    -webkit-text-stroke: 1px rgba(255,255,255,0.1);


    @media (min-width: 769px){
        font-size: 18px;
    }

    ::before{
        animation: animate 5s linear infinite;
        content: 'Powered by Gonzalo Barrios ©2022';
        position: absolute;
        //color: #03e9f4;
        color: #fff;
        width: 0;
        overflow: hidden;
        transition: 5s;
    }

    @keyframes animate {
        0%{
            width: 0%;
        }
        50%{
            width: 50%;
        }
        100%{
            width: 100%;
        }
    }


`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media (min-width: 769px){
        display: none;
    }
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    
`