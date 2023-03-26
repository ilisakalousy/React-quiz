import React from 'react';
 
import { StyledLogo } from './styled';

function Logo({ children }) {
  return (
    <StyledLogo>
        {children}
    </StyledLogo>
  );
};
 
export default Logo;
 