import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    max-width: 400px;
    min-height: 250px;
    background-color: ${props => props.theme.firstFontCol};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 40px;
    margin-left: 40px;

    &:nth-child(4n),
    &:first-child {
        margin-left: 0;
    }
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 130px;
    object-fit: cover;
`;

export const StyledHeading = styled.h2`
    margin: 0;
    font-size: 30px;
    text-align: center;
    max-width: 300px;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
`;

export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: flex-end;
    margin-top: 12px;
`;

export const StyledAuthor = styled.span`
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
`;

export const StyledQuantity = styled.span`
    margin: 0;
    font-size: 18px;
    
`;