import styled from "styled-components";

import { ReactComponent as Plus } from "../../../assets/plus.svg";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

export const NewPageWrapper = styled.form`
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
    margin-top: 15px;

    &:nth-child(3) {
        margin-top: 55px;
    }
`;

export const StyledButton = styled.input`
    width: 150px;
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
    background-color: rgba(46, 204, 113, 0.9);
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(46, 204, 113, 1);
    }

    &:disabled {
        background-color: rgba(46, 204, 113, 0.6);
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

export const StyledRightArrow = styled(LeftArrow)`
    width: 35px;
    height: 35px;
    transform: rotate(180deg);
    stroke: #000;
`;

export const ArrowButton = styled.button`
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

    &:disabled {
        background-color: rgba(228, 228, 228, 0.3);
        cursor: default;
    }

    & > ${StyledRightArrow} {
        stroke: rgba(0, 0, 0, 0.3);
    }
`;

export const StyledLeftArrow = styled(LeftArrow)`
    width: 35px;
    height: 35px;
    stroke: #000;
`;

export const StyledQuestion = styled(StyledInput)`
    
`;