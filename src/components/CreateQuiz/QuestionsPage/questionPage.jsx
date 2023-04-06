import React, { useState }  from 'react';
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
    ArrowButton,
    StyledLeftArrow,
    StyledRightArrow,
    StyledQuestion,
} from "./styled";
 
function QuestionsPage({ addingClick, backPageHandler, pageNumber, nextPageHandler, isNextDisabled, newQuizMap }) {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: 'all'
    });

    const onSubmit = (data) => {
        newQuizMap.set(`quizName_#${pageNumber}`, newQuizData)
        const json = JSON.stringify(Object.fromEntries(newQuizMap))
        console.log(json)
    };

    const [newQuizData, setNewQuizData] = useState({
        question: '',
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: '',
        fourthAnswer: '',
    })

  return (
    <NewPageWrapper
        onSubmit={handleSubmit(onSubmit)}
    >
        <h1>Page №{pageNumber}</h1>
        <InputWrapper>
            <StyledQuestion 
                {...register("quizQuestion", {
                    required: true,
                })}
                value={newQuizData.question}
                onChange={e => setNewQuizData({...newQuizData, question: e.target.value})}
            />
            <InputPlaceholder>Question</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("firstOption", {
                    required: true,
                })}
                value={newQuizData.firstAnswer}
                onChange={e => setNewQuizData({...newQuizData, firstAnswer: e.target.value})}
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
                value={newQuizData.secondAnswer}
                onChange={e => setNewQuizData({...newQuizData, secondAnswer: e.target.value})}
            />
            <InputPlaceholder>Option 2</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("thirdOption", {
                    required: true,
                })}
                value={newQuizData.thirdAnswer}
                onChange={e => setNewQuizData({...newQuizData, thirdAnswer: e.target.value})}
            />
            <InputPlaceholder>Option 3</InputPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                {...register("fourthOption", {
                    required: true,
                })}
                value={newQuizData.fourthAnswer}
                onChange={e => setNewQuizData({...newQuizData, fourthAnswer: e.target.value})}
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
 