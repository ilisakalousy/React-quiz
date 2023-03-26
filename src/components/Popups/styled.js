import styled from "styled-components";

import { ReactComponent as Plus } from "../../assets/plus.svg";

export const PopupWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupBody = styled.div`
    width: 100%;
    max-width: 700px;
    height: 500px;
    background-color: #fff;
    border-radius: 15px;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 30px 80px;
    align-items: center;
`;

export const PopupRight = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CloseButton = styled(Plus)`
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