import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
    PopupLeft,
    StyledHeading,
    InputWrapper,
    StyledInput,
    EmailPlaceholder,
    SignupButton,
    StyledError
} from "./styled";

import CreateUser from '../CreateUser/createUser';

function SignupForm() {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        reset();
        setSignupStep(1);
    };

    const [signupStep, setSignupStep] = useState(0);

  return (
    signupStep === 0 ?
    <PopupLeft
        onSubmit={handleSubmit(onSubmit)}
    >
        <StyledHeading>Sign up</StyledHeading>
        <InputWrapper>
            <StyledInput 
                {...register("userEmail", {
                    pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    required: true
                }
                )}
            />
            <EmailPlaceholder>
                Email:
            </EmailPlaceholder>
            <StyledError>
                {errors?.userEmail && <p>Invalid email</p>}
            </StyledError>
        </InputWrapper>
       
        <SignupButton 
            type="submit" 
            disabled={!isValid}
            onClick={onSubmit}
        />
    </PopupLeft>
    : <CreateUser 
        setSignupStep={setSignupStep}
      />
  );
};
 
export default SignupForm;
 