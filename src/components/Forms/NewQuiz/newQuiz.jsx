import React, { useState } from "react";

import {
    StyledNewForm,
    StyledInput,
    InputPlaceholder,
    InputWrapper,
    StyledButton
} from './styled';

import QuestionsPage from "../../CreateQuiz/QuestionsPage/questionPage";


function NewQuizForm({ pageNumber, setPageNumber, pages, addingClick }) {

    const onClickHandler = (e) => {
        e.preventDefault();
        setPageNumber(pageNumber + 1);
        pages.push(<QuestionsPage />)
    };

    return (
        <StyledNewForm>
            <InputWrapper>
                <StyledInput />
                <InputPlaceholder>Quiz name</InputPlaceholder>
            </InputWrapper>
            <StyledButton
                onClick={addingClick}
            >
                Create
            </StyledButton>
        </StyledNewForm>
    );
};

export default NewQuizForm;