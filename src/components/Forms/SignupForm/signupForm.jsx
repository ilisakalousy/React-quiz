import React, { useEffect, useMemo, useState } from 'react';
 
import {
    PopupLeft,
    StyledHeading,
    InputWrapper,
    StyledInput,
    EmailPlaceholder,
    PasswordPlaceholder,
    SignupButton
} from "./styled";

import CreateUser from '../CreateUser/createUser';

function SignupForm() {

    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [signupStep, setSignupStep] = useState(0);
    const [isEmailValid, setIsEmailValid] = useState(false);

    useEffect(() => {
        if (emailValue.length > 0) {
            setIsEmailValid(emailRegex.test(emailValue));
        }
    }, [emailValue])

    const handleSignup = (e) => {
        e.preventDefault();
        setSignupStep(1);
    }   

  return (
    signupStep === 0 ?
    <PopupLeft>
        <StyledHeading>Sign up</StyledHeading>
        <InputWrapper>
            <StyledInput 
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                isEmailValid={isEmailValid}
            />
            <EmailPlaceholder
                value={emailValue}
            >
                Email:
            </EmailPlaceholder>
        </InputWrapper>
        <InputWrapper>
            <StyledInput 
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                isEmailValid
            />
            <PasswordPlaceholder
                value={passwordValue}
            >
                Password:
            </PasswordPlaceholder>
        </InputWrapper>
        <SignupButton
            onClick={handleSignup}
            disabled={!isEmailValid}
        >
            Submit
        </SignupButton>
    </PopupLeft>
    : <CreateUser 
        setSignupStep={setSignupStep}
      />
  );
};
 
export default SignupForm;
 