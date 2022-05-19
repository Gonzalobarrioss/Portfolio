import styled from "styled-components";

export const OptionsContainer = styled.div`
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    justify-content: flex-start;
    align-items: flex-start;
    width: inherit;
    height: 180px;
`

export const OptionsList = styled.ul`
    list-style: none;
    height: 30px;
    padding: 0;
`

export const Option = styled.li`
    background: #fff;
    color: #0a192f;
    border: 1px solid #0a192f;
    margin: 5px 0;
    padding: 10px 10px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    transition: 0.2s;

    &:hover{
        background: #0a192f;
        color: #fff;
        transform: scale(1.08)
    }
`