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
        padding: 0 50px;
    }

    @media (max-width: 1080px){
        padding: 0 100px;
    }
    
`