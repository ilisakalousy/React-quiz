import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 

import {
    StyledWrapper,
    CreateForm,
    StyledLeftArrow,
    BackButton,
    NamePlaceholder,
    CountryPlaceholder,
    InputWrapper,
    StyledHeading,
    NickPlaceholder,
    CreateButton,
    PasswordPlaceholder,
    PasswordToggler,
    StyledEye,
    StyledClosedEye,
    StyledInput,
    PasswordFormat,
    PasswordFomatInfo,
    PasswordInfoWrapper
} from "./styled";

function CreateUser({ signupStep, setSignupStep }) {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: 'all'
    });

    const handlePasswordChange =(e)=>{ 
        setPasswordValue(e.target.value);
    };

    const passwordTypeHandler = (e) => {
        e.preventDefault();
        setIsShowPassword(!isShowPassword)
        setPasswordValue(passwordValue)
    };

  return (
    <StyledWrapper>
        <BackButton
            onClick={() => setSignupStep(signupStep - 1)}
        >
                <StyledLeftArrow />
            </BackButton>
        <CreateForm
            
        >
            <StyledHeading>
                Tell about yourself:
            </StyledHeading>
            <InputWrapper>
            <PasswordInfoWrapper
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            >
            <PasswordFormat></PasswordFormat>
            </PasswordInfoWrapper>
            <PasswordFomatInfo
                isVisible={isVisible}
            >
                Password must include:<br></br>
                &#x2022; 8-30 characters<br></br>
                &#x2022; Capital letter<br></br>
                &#x2022; One number<br></br>
                &#x2022; Special sign

            </PasswordFomatInfo>
                <PasswordToggler
                    onClick={passwordTypeHandler}
                >
                    {
                       isShowPassword ? <StyledEye /> : <StyledClosedEye />
                    }
                </PasswordToggler>
                <StyledInput 
                    {...register("userPassword", {
                        pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                        required: true,
                    })}
                    type={isShowPassword ? "text" : "password"}                    
                    value={passwordValue}
                    onChange={handlePasswordChange}
                />
                <PasswordPlaceholder>
                    Create password
                </PasswordPlaceholder>
            </InputWrapper>
            <InputWrapper>
                <StyledInput 
                    {...register("userName", {
                        pattern: /^[a-zA-Z0-9]+$/,
                        required: true
                        }
                    )}
                />
                <NamePlaceholder>
                    Name
                </NamePlaceholder>
            </InputWrapper>
            <InputWrapper>
                <StyledInput 
                    {...register("userNickname", {
                        pattern: /^[a-zA-Z0-9]+$/,
                        required: true,
                    }
                    )}
                />
                <NickPlaceholder
                >
                    Nick
                </NickPlaceholder>
            </InputWrapper>
            <InputWrapper>
                <StyledInput 
                    {...register("userCountry", {
                        pattern: /^[a-zA-Z\-]+$/,
                        required: true,
                    }
                    )}
                />
                <CountryPlaceholder>
                    Country
                </CountryPlaceholder>
            </InputWrapper>
            <CreateButton 
                type="submit"
                disabled={!isValid}
                value="Submit"
            />
        </CreateForm>
    </StyledWrapper>
  );
};
 
export default CreateUser;
 