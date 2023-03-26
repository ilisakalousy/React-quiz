import React, { useState } from 'react';
 
import {
    StyledWrapper,
    CreateForm,
    StyledInput,
    StyledLeftArrow,
    BackButton,
    NamePlaceholder,
    CountryPlaceholder,
    InputWrapper,
    StyledHeading,
    NickPlaceholder,
    CreateButton
} from "./styled";

function CreateUser({ setSignupStep }) {

    const [nameValue, setNameValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [nickValue, setNickValue] = useState('');

  return (
    <StyledWrapper>
        <BackButton
            onClick={() => setSignupStep(0)}
        >
                <StyledLeftArrow />
            </BackButton>
        <CreateForm>
            <StyledHeading>
                Tell about yourself:
            </StyledHeading>
            <InputWrapper>
                <StyledInput 
                    value={nameValue}
                    onChange={e => setNameValue(e.target.value)}
                />
                <NamePlaceholder
                    value={nameValue}
                >
                    Name
                </NamePlaceholder>
            </InputWrapper>
            <InputWrapper>
                <StyledInput 
                    value={nickValue}
                    onChange={e => setNickValue(e.target.value)}
                />
                <NickPlaceholder
                    value={nickValue}
                >
                    Nick
                </NickPlaceholder>
            </InputWrapper>
            <InputWrapper>
                <StyledInput 
                    value={countryValue}
                    onChange={e => setCountryValue(e.target.value)}
                />
                <CountryPlaceholder
                    value={countryValue}
                >
                    Country
                </CountryPlaceholder>
            </InputWrapper>
            <CreateButton>
                Continue
            </CreateButton>
        </CreateForm>
    </StyledWrapper>
  );
};
 
export default CreateUser;
 