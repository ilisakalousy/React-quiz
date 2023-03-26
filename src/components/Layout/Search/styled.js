import styled from "styled-components";

import { ReactComponent as Loupe } from "../../../assets/search.svg";
import { ReactComponent as Plus } from "../../../assets/plus.svg";

export const SearchWrapper = styled.div`
    width: 200px;
    height: 40px;
    flex-grow: 1;
    background-color: transparent;
    position: relative;
    margin-left: 30px;
`;

export const StyledSearch = styled.input`
    width: 100%;
    height: 40px;
    background-color: ${props => props.theme.transpHoverCol};
    color: ${props => props.theme.secondFontCol};
    border: none;
    border-radius: 10px;
    padding-left: 50px;
    font-size: ${props => props.theme.regularFsz};
    padding-right: 30px;

    &:focus {
        outline: none;
    }
`;

export const StyledLoupe = styled(Loupe)`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
`;


export const StyledPlus = styled(Plus)`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 12px;
    right: 10px;
    border-radius: 50%;
    transform: rotate(45deg);

    &:hover {
        background-color: #e4e4e4;
        cursor: pointer;
    }
`;