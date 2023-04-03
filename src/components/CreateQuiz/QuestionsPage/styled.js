import styled from "styled-components";

import { ReactComponent as Plus } from "../../../assets/plus.svg";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

export const NewPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
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

export const StyledButton = styled.button`
    width: 190px;
    height: 45px;
    background-color: ${props => props.theme.regularCol};
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: ${props => props.theme.regularHoverCol};
    }

    &:disabled {
        background-color: #6495ED;
        cursor: default;
    }
`;

export const PageAddingButton = styled.button`
    width: 45px;
    height: 45px;
    background-color: #2ECC71;
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #4caf50;
    }

    &:disabled {
        background-color: #27AE60;
        cursor: default;
    }
`;

export const StyledPlus = styled(Plus)`
    width: 40px;
    height: 40px;
    stroke: #fff;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

export const BackButton = styled.button`
    width: 45px;
    height: 45px;
    background-color: #f0f0f0;
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #e4e4e4;
    }
`;

export const StyledLeftArrow = styled(LeftArrow)`
    width: 35px;
    height: 35px;
    stroke: #000;
`;