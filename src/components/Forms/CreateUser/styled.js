import styled from "styled-components";

import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

export const StyledWrapper = styled.div`

`;

export const CreateForm = styled.form`
    display: flex;
    flex-direction: column;
`;

// name, country, photo, tags 

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

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const StyledLeftArrow = styled(LeftArrow)`
    width: 35px;
    height: 35px;
`;

export const CountryPlaceholder = styled.span`
    position: absolute;
    width: 60px;
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

export const NamePlaceholder = styled.span`
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

export const NickPlaceholder = styled.span`
    position: absolute;
    width: 35px;
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

export const CreateButton = styled.button`
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