import styled from "styled-components";

import { StyledCross } from "../../UI/CloseButton/styled";

export const AUSureWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AUSureBody = styled.div`
    width: 300px;
    height: 180px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const StyledParagraph = styled.p`
    font-size: 14px;
    color: #000;
`;

export const ConfirmButton = styled.button`
    width: 200px;
    height: 45px;
    background-color: ${props => props.theme.regularCol};
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.regularHoverCol};
    }

    &:disabled {
        background-color: #6495ED;
        cursor: default;
    }
`;

export const CloseButton = styled(StyledCross)`
    width: 30px;
    height: 30px;
`;