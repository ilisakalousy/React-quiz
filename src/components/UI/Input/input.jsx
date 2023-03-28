import React from 'react';

import {
    StyledInput
} from "./styled";
 
function Input({ ...props }) {
  return (
    <StyledInput 
        {...props}
    />
  );
};
 
export default Input;
 