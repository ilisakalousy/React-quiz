import styled from "styled-components";

export const PopupLeft = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledHeading = styled.h2`
    font-size: 30px;
    margin: 0;
`;

export const StyledInput = styled.input`
    width: 300px;
    height: 45px;
    border: 1px solid ${props => props.theme.regularCol};
    border-radius: 10px;
    font-size: 14px;
    padding: 0 10px;

    &:focus {
        outline: none;
    }

    &:placeholder-shown {
        border-color: red;
    }
`;

export const EmailPlaceholder = styled.span`
    position: absolute;
    width: 45px;
    font-size: ${props => props.value ? "12px" : "14px"};
    background-color: #fff;
    top: ${props => props.value ? "-7px" : "14px"};
    left: ${props => props.value ? "15px" : "10px"};
    text-align: center;
    user-select: none;
    transition: 0.2s ease;
    pointer-events: none;
    font-weight: 300;
    color: grey;

    ${StyledInput}:focus ~ & {
        top: -7px;
        left: 15px;
        font-size: 12px;
    }
`;

export const PasswordPlaceholder = styled.span`
    position: absolute;
    width: 65px;
    font-size: ${props => props.value ? "12px" : "14px"};
    background-color: #fff;
    top: ${props => props.value ? "-7px" : "14px"};
    left: ${props => props.value ? "15px" : "10px"};
    text-align: center;
    user-select: none;
    transition: 0.2s ease;
    pointer-events: none;
    font-weight: 300;
    color: grey;

    ${StyledInput}:focus ~ & {
        top: -7px;
        left: 15px;
        font-size: 12px;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 45px;
    margin-top: 15px;
`;

export const LoginButton = styled.button`
    width: 300px;
    height: 45px;
    border-radius: 10px;
    border: none;
    color: #fff;
    margin-top: 15px;
    background-color: ${props => props.theme.regularCol};
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.regularHoverCol};
    }
`;