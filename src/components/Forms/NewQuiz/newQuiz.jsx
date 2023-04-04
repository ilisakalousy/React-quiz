import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
    StyledNewForm,
    StyledInput,
    InputPlaceholder,
    InputWrapper,
    StyledButton,
    StyledError
} from './styled';

function NewQuizForm({ addingClick }) {

    const [inputValue, setInputValue] = useState('Create');

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: 'all'
    });

    const onSubmit = (data) => {
        reset();
        setInputValue('Creating...');
        return new Promise(resolve => {
            setTimeout(() => {
                addingClick();
            }, 1000)
        })
    };

    return (
        <StyledNewForm
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputWrapper>
                <StyledInput 
                    {...register("quizName", {
                        pattern: /^[A-Za-z0-9]*$/,
                        required: true
                    })}
                />
                <InputPlaceholder>Quiz name</InputPlaceholder>
                <StyledError>{errors?.quizName && <p>*Invalid name</p>}</StyledError>
            </InputWrapper>
            <StyledButton
                type="submit"
                value={inputValue}
                disabled={!isValid}
            />
        </StyledNewForm>
    );
};

export default NewQuizForm;