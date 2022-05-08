import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 24px; 
`;
export const Card = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    max-width: 273px;
`;
export const Info = styled.div`
    text-align: left;
    margin-top: 24px;
    margin-bottom: 24px;
`;
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    .link {
        color: #FFE81F;
        text-decoration: none;
        border: 0.125rem #FFE81F solid;
        margin-top: 35px;
        padding: 8px 36px;
    }
`;