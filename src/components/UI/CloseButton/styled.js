import styled from "styled-components";

import { ReactComponent as Plus } from "../../../assets/plus.svg";

export const StyledCloseButton = styled.button`
    
`;

export const StyledCross = styled(Plus)`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transform: rotate(45deg);
    border-radius: 50%;
    
    &:hover {
        background-color: #f0f0f0;
    }
`;