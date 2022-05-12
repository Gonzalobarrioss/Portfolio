import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    height: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px;

    @media (max-width: 480px){
        padding: 0 25px;
    }

    @media (min-width: 481px) and (max-width: 767px){
        padding: 0 50px;
    }

    @media (min-width: 768px) and (max-width: 1080px){
        padding: 0 100px;
    }
    
`