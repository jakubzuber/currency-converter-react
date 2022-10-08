import styled from "styled-components";

export const Title = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 180px;
    margin-right: 5px;
`;

export const Input = styled.select`
    border: 2px solid rgb(92, 158, 228);
    padding: 5px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;

    &:hover {
    background-color: rgb(211, 208, 208);
    }

    &:active {
    background-color: rgb(224, 191, 191);
    }
`;