import styled from "styled-components";

import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import { ReactComponent as Eye } from "../../../assets/eye.svg";
import { ReactComponent as ClosedEye } from "../../../assets/closedEye.svg";
import { ReactComponent as Info } from "../../../assets/info.svg";

export const StyledWrapper = styled.div`

`;

export const CreateForm = styled.form`
    display: flex;
    flex-direction: column;
`;

// name, country, photo, tags 

export const StyledHeading = styled.h2`
    font-size: 30px;
    margin: 0;
`;

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const StyledLeftArrow = styled(LeftArrow)`
    width: 35px;
    height: 35px;
`;

export const CountryPlaceholder = styled.span`
   position: absolute;
    width: 55px;
    top: -7px;
    left: 15px;
    font-size: 12px;
    background-color: #fff;
    text-align: center;
    user-select: none;
    transition: 0.2s ease;
    pointer-events: none;
    font-weight: 300;
    color: grey;
`;

export const NamePlaceholder = styled.span`
    position: absolute;
    width: 40px;
    top: -7px;
    left: 15px;
    font-size: 12px;
    background-color: #fff;
    text-align: center;
    user-select: none;
    transition: 0.2s ease;
    pointer-events: none;
    font-weight: 300;
    color: grey;
`;

export const PasswordPlaceholder = styled.span`
    position: absolute;
    width: 100px;
    top: -7px;
    left: 15px;
    font-size: 12px;
    background-color: #fff;
    text-align: center;
    user-select: none;
    transition: 0.2s ease;
    pointer-events: none;
    font-weight: 300;
    color: grey;
`;

export const NickPlaceholder = styled.span`
    position: absolute;
    width: 35px;
    top: -7px;
    left: 15px;
    font-size: 12px;
    background-color: #fff;
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
`;

export const CreateButton = styled.input`
    width: 300px;
    height: 45px;
    border-radius: 10px;
    border: none;
    color: #fff;
    margin-top: 15px;
    background-color: ${props => props.theme.regularCol};
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.regularHoverCol};
    }

    &:disabled {
        background-color: #6495ED;
        cursor: default;
    }
`;

export const PasswordToggler = styled.button`
    width: 45px;
    height: 45px;
    border: none;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid ${props => props.theme.regularCol};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
`;

export const StyledEye = styled(Eye)`
    width: 20px;
    height: 20px;
    stroke: ${props => props.theme.regularCol};
`;

export const StyledClosedEye = styled(ClosedEye)`
    width: 20px;
    height: 20px;
    stroke: ${props => props.theme.regularCol}; 
`

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

export const PasswordInfoWrapper = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    right: -30px;
    top: 12px;
`;

export const PasswordFormat = styled(Info)`
    width: 20px;
    height: 20px;
    stroke: grey;
    stroke-width: 1;
`;

export const PasswordFomatInfo = styled.span`
    opacity: ${props => props.isVisible ? "1" : "0"};
    transition: 0.2s ease;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 12px;
    display: block;
    position: absolute;
    padding: 3px;
    right: -165px;
    top: -50px;
    pointer-events: none;
`;