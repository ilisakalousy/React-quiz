import styled from "styled-components";

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