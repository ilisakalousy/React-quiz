import styled from "styled-components";

export const PopupWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PopupBody = styled.div`
    width: 80%;
    min-height: 80vh;
    background-color: #fff;
    border-radius: 15px;
    padding: 15px;
`;