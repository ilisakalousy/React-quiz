import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';

import AreUSure from '../../Popups/micro/micro';

import {
    NewPageWrapper,
    StyledButton,
    StyledInput,
    InputPlaceholder,
    InputWrapper,
    StyledPlus,
    BtnWrapper,
    PageAddingButton,
    ArrowButton,
    StyledLeftArrow,
    StyledRightArrow,
    StyledQuestion,
} from "./styled";
 
function QuestionsPage({ 
    addingClick, // adds page
    backPageHandler, // go to previous page
    pageNumber, // number of current page
    setPageNumber, // set page number 
    nextPageHandler, // go to next page
    isNextDisabled, // is this a last page ? 
    isShowMicro, // are you sure ?
    setIsShowMicro // are you sure ? state changer
}) {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: 'all'
    });

    const onSubmit = (data) => {
    };

    const areYouSure = (e) => {
        e.preventDefault();
        setPageNumber(0);
        setIsShowMicro(false);

    };

  return (
    <NewPageWrapper
        onSubmit={handleSubmit(onSubmit)}
    >
        <h1>Page №{pageNumber}</h1>
        <AreUSure
            setIsShow={setIsShowMicro}
            isShow={isShowMicro}        
        >
            <StyledButton
                as="button"
                onClick={areYouSure}
            >
                Confirm
            </StyledButton>
        </AreUSure>
        <InputWrapper>
            <StyledQuestion 
                {...register("quizQuestion", {
                    required: true,
                })}
                
            />
            <InputPlaceholder>Question</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("firstOption", {
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
                    required: true,
                })}       
                
            />
            <InputPlaceholder>Option 2</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("thirdOption", {
                    required: true,
                })}
                
            />
            <InputPlaceholder>Option 3</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("fourthOption", {
                    required: true,
                })}
                
            />
            <InputPlaceholder>Option 4</InputPlaceholder>
        </InputWrapper>
        <BtnWrapper>
        <ArrowButton
            onClick={backPageHandler}
        >
            <StyledLeftArrow />
        </ArrowButton>
        <ArrowButton
            onClick={nextPageHandler}
            disabled={!isNextDisabled}
        >
            <StyledRightArrow />
        </ArrowButton>
            <StyledButton 
                type="submit"
                value="Create"
                disabled={!isValid}
            />
            <PageAddingButton
                onClick={addingClick}
                disabled={!isValid && !isNextDisabled}
            >
                <StyledPlus />
            </PageAddingButton>
        </BtnWrapper>   
    </NewPageWrapper>
  );
};
 
export default QuestionsPage;
 