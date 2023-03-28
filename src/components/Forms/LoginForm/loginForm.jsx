import React from 'react';
import { useForm } from 'react-hook-form'; 

import Input from '../../UI/Input/input';

import {
    PopupLeft,
    StyledHeading,
    InputWrapper,
    EmailPlaceholder,
    PasswordPlaceholder,
    LoginButton,
    StyledError,
    StyledInput
} from "./styled";

function LoginForm() {

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
    };

  return (
<PopupLeft
    onSubmit={handleSubmit(onSubmit)}
>
    <StyledHeading>Log in</StyledHeading>
    <InputWrapper>
        <StyledInput 
            {...register("userEmail", {
                pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                required: true,
            })}
        />
        <EmailPlaceholder
        >
            Email:
        </EmailPlaceholder>
    </InputWrapper>
    <InputWrapper>
        <StyledInput 
            type="password"
           {...register("userPassword", {
            pattern:  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
            required: true,
           })}
        />
        <PasswordPlaceholder>
            Password:
        </PasswordPlaceholder>
    </InputWrapper>
    <LoginButton
        type="submit" 
        disabled={!isValid}
        onClick={onSubmit}
    >
        Submit
    </LoginButton>
</PopupLeft>
  );
};
 
export default LoginForm;
 