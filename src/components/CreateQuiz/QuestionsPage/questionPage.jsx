import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

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
    };

  return (
    <NewPageWrapper>
        <h1>Card №{pageNumber}</h1>
        <InputWrapper>
            <StyledInput 
                {...register("firstOption", {
                    pattern: /^[A-Za-z0-9]*$/,
                    required: true,
                })}
            />
            <InputPlaceholder>
                Option 1
            </InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("secondOption", {
                    pattern: /^[A-Za-z0-9]*$/,
                    required: true,
                })}                
            />
            <InputPlaceholder>Option 2</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("thirdOption", {
                    pattern: /^[A-Za-z0-9]*$/,
                    required: true,
                })}
            />
            <InputPlaceholder>Option 3</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("fourthOption", {
                    pattern: /^[A-Za-z0-9]*$/,
                    required: true,
                })}
            />
            <InputPlaceholder>Option 4</InputPlaceholder>
        </InputWrapper>
        <BtnWrapper>
        <BackButton
            onClick={backPageHandler}
        >
            <StyledLeftArrow />
        </BackButton>
            <StyledButton 
                type="submit"
                value="Create"
                disabled={!isValid}
            />
            <PageAddingButton
                onClick={addingClick}
                disabled={!isValid}
            >
                <StyledPlus />
            </PageAddingButton>
        </BtnWrapper>   
    </NewPageWrapper>
  );
};
 
export default QuestionsPage;
 