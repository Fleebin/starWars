import styled from "styled-components";

export const Container = styled.div`
    max-width: 1196px;
    margin: 0px auto;
`;
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
    img {
        width: 98px;
        height: 75px;
    }
`;
export const Main = styled.h1`
    font-size: 2.5rem;
    color: #FFE81F;
    text-align: center;
    margin-top: 48px;
`;
export const Title = styled.h1`
    font-size: 1.5rem;
    color: #FFE81F;
`;
export const SubTitle = styled.h2`
    margin-bottom: 8px;
    font-size: 1.125rem;
    color: #FAFAFA;
`;
export const Description = styled.p`
    font-size: 0.875rem;
    color: #FAFAFA;
`;
export const Input = styled.input`
    border: 2px solid #606060;
    background: #303030;
    width: 570px;
    height: 40px;
    margin: 42px 25%;
    ::placeholder {
        color: #FAFAFA;
        text-transform: uppercase;
        padding-left: 44px;
    }
`;