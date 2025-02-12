import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 70px;
    display: flex;
    background-color: #0f7d9e;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transitino: all ease .3s;


    &:hover {
        background-color: #be1720;
    }
    `;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 30px;
    
`;

export const Label = styled.div`
    font-family: sans-serif;
    height: inherit;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1; 
    padding: 0 20px;
`;