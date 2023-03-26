import React, { useState } from 'react';
 
import {
    PopupLeft,
    StyledHeading,
    InputWrapper,
    StyledInput,
    EmailPlaceholder,
    PasswordPlaceholder,
    LoginButton
} from "./styled";

function LoginForm() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

  return (
<PopupLeft>
    <StyledHeading>Log in</StyledHeading>
    <InputWrapper>
        <StyledInput 
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
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
        />
        <PasswordPlaceholder
             value={passwordValue}
        >
            Password:
        </PasswordPlaceholder>
    </InputWrapper>
    <LoginButton>Submit</LoginButton>
</PopupLeft>
// {/* <div>
//     <div id="signInDiv"></div>
// </div> */}
  );
};
 
export default LoginForm;
 