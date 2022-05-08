import styled from "styled-components";

export const Grid = styled.div`
    display: grid; 
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, 1fr); 
    grid-column-gap: 25px;
    grid-row-gap: 25px; 
`;
export const CardInfo = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    max-width: 768px;
    height: 129px;
    grid-area: 1 / 1 / 2 / 2; 
    .flex {
        display: flex;
    }
`;
export const CardVei = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    max-width: 768px;
    height: 300px;
    grid-area: 2 / 1 / 3 / 2;
    .flex {
        display: flex;
    }
`;
export const CardFilms = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    max-width: 372px;
    height: 453px;
    grid-area: 1 / 2 / 3 / 3;
`;
export const Main = styled.h1`
    font-size: 2.5rem;
    color: #FFE81F;
    text-align: left;
    margin-top: 48px;
    margin-bottom: 40px;
`;