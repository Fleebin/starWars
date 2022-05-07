import styled from "styled-components";

export const Nav = styled.nav`
    background: #0F0F0F;
    padding: 1.875rem 0rem;
    display: flex;
    justify-content: center;
    .link {
        color: #FAFAFA;
        text-decoration: none;
        margin-right: 1.5rem;
        padding: 1rem 8.75rem;
        &:hover {
            background: #303030;
            border-radius: 100px;
        }
    }
    .form {
        text-decoration: none;
        border: 0.125rem solid #FFE81F; 
        padding: 0.625rem 1.0625rem;
        color: #FAFAFA;
    }
`;
export const Card = styled.div`
    background-color: #303030;
    border: 0.125rem solid #606060;
    opacity: 1;
    padding: 1.5rem 1rem;
    max-width: 273px;
    height: 448px;
`;
export const Info = styled.div`
    text-align: left;
`;
export const Title = styled.h1`
    font-size: 1.5rem;
    color: #FFE81F;
`;
export const SubTitle = styled.h2`
    font-size: 1.125rem;
    color: #FAFAFA;
`;
export const Description = styled.p`
    font-size: 0.875rem;
    color: #FAFAFA;
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
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 24px; 
`;