import styled from "styled-components";

import { ReactComponent as Plus } from "../../../assets/plus.svg";
import Button from "../../UI/Button/button";

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.firstFontCol};
    padding: 0 60px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
`;

export const LoginButton = styled(Button)`
    background-color: ${props => props.theme.transpCol};
    color: ${props => props.theme.secondFontCol};
    margin-left: 30px;

    &:hover {
        background-color: ${props => props.theme.transpHoverCol};
    }
`;

export const SignupButton = styled(Button)`
    background-color: ${props => props.theme.primaryCol};
    color: ${props => props.theme.firstFontCol};
    margin-left: 30px;

    &:hover {
        background-color: ${props => props.theme.primaryHoverCol};
    }
`;

export const AddingButton = styled(Button)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.theme.regularCol};
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${props => props.theme.regularHoverCol};
    }
`;

export const StyledPlus = styled(Plus)`
    width: 40px;
    height: 40px;
    stroke-width: 2;
`;