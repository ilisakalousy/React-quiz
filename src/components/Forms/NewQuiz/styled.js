import styled from "styled-components";

export const StyledNewForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`;

export const InputPlaceholder = styled.span`
    position: absolute;
    width: 65px;
    font-size: 12px;
    background-color: #fff;
    top: -7px;
    left: 15px ;
    text-align: center;
    user-select: none;
    transition: 0.2s ease;
    pointer-events: none;
    font-weight: 300;
    color: grey;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 45px;
    margin-top: 25px;
`;

export const StyledError = styled.div`
    position: absolute;
    top: 5px;
    right: -85px;
    font-size: 12px;
    color: #E32636;
`;

export const StyledButton = styled.input`
    width: 300px;
    height: 45px;
    background-color: ${props => props.theme.regularCol};
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.regularHoverCol};
    }

    &:disabled {
        background-color: #6495ED;
        cursor: default;
    }
`;