import React from 'react';
import { useForm } from 'react-hook-form'; 

import {
    PopupLeft,
    StyledHeading,
    InputWrapper,
    StyledInput,
    EmailPlaceholder,
    PasswordPlaceholder,
    LoginButton,
    StyledError
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
                required: true
            }
            )}
        />
        <EmailPlaceholder
            
        >
            Email:
        </EmailPlaceholder>
        <StyledError>
                {errors?.userEmail && <p>Invalid email</p>}
            </StyledError>
    </InputWrapper>
    <InputWrapper>
        <StyledInput 
            type="password"
           {...register("userPassword", {
            required: true,
            minLength: 8,
            pattern:  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g,
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
// {/* <div>
//     <div id="signInDiv"></div>
// </div> */}
  );
};
 
export default LoginForm;
 