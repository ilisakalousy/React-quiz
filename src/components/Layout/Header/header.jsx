import React from 'react';


import SearchInput from '../Search/search';
import Logo from '../../UI/Logo/logo';
import { StyledHeader, HeaderContent, LoginButton, SignupButton, AddingButton, StyledPlus } from './styled';
 
function Header({ search, setSearch, setIsShowLog, setIsShowSign }) {
  return (
    <StyledHeader>
        <HeaderContent>
            <Logo>
                .INquiz
            </Logo>
            <SearchInput 
                search={search}
                setSearch={setSearch}
            />
            <AddingButton>
                <StyledPlus />
            </AddingButton>
            <LoginButton
                onClick={() => setIsShowLog(true)}
            >
                Log in
            </LoginButton>
            <SignupButton
                onClick={() => setIsShowSign(true)}
            > 
                Sign up
            </SignupButton>
        </HeaderContent>
    </StyledHeader>
  );
};
 
export default Header;
 