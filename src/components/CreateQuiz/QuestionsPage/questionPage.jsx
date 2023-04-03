import React from 'react';

import {
    NewPageWrapper,
    StyledButton,
    StyledInput,
    InputPlaceholder,
    InputWrapper,
    StyledPlus,
    BtnWrapper,
    PageAddingButton,
    BackButton,
    StyledLeftArrow,
} from "./styled";
 
function QuestionsPage({ addingClick, backPageHandler, pageNumber }) {

  return (
    <NewPageWrapper>
        <h1>Card №{pageNumber}</h1>
        <InputWrapper>
            <StyledInput 

            />
            <InputPlaceholder>Question 1</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput />
            <InputPlaceholder>Question 2</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput />
            <InputPlaceholder>Question 3</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput />
            <InputPlaceholder>Question 4</InputPlaceholder>
        </InputWrapper>
        <BtnWrapper>
        <BackButton
            onClick={backPageHandler}
        >
            <StyledLeftArrow />
        </BackButton>
            <StyledButton>
                Create
            </StyledButton>
            <PageAddingButton
                onClick={addingClick}
            >
                <StyledPlus />
            </PageAddingButton>
        </BtnWrapper>   
    </NewPageWrapper>
  );
};
 
export default QuestionsPage;
 