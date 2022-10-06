import styled from "styled-components";

export const SliderContainer = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    .image{
       width: 1000px;
       height: 680px;
       border-radius: 10px;
    }

    .right-arrow{
        position: absolute;
        top: 50%;
        right: 32px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select:none;
    }

    .left-arrow{
        position: absolute;
        top: 50%;
        left: 32px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select:none;
        
    }
`

