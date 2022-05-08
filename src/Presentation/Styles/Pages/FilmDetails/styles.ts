import styled from "styled-components";

export const Grid = styled.div`
    display: grid; 
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(2, 1fr); 
    grid-column-gap: 25px;
    grid-row-gap: 25px; 
`;
export const CardSin = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    max-width: 372px;
    height: 363px;
    grid-area: 1 / 1 / 2 / 2; 
    .flex {
        display: flex;
    }
`;
export const CardTec = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    width: 370px;
    height: 246px;
    grid-area: 2 / 1 / 3 / 2;
    .flex {
        display: flex;
    }
`;
export const CardChars = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    width: 767px;
    height: 661px;
    grid-area: 1 / 2 / 3 / 3;
`;
