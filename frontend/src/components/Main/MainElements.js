import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    height: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 768px){
        padding: 0 25px;
    }

    @media (min-width: 769px) and (max-width: 1080px){
        padding: 0 40px;
    }
    
`