import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px;
    height: 40px;
    border: none;
    color: ${props => props.theme.firstFontCol};
    font-size: ${props => props.theme.regularFsz};
    border-radius: 5px;
    cursor: pointer;
`;