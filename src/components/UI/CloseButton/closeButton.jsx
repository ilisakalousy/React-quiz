import React from 'react';

import {
    StyledCross
} from "./styled";
 
function CloseButton({ ...props}) {
  return (
    <StyledCross {...props} />
  );
};
 
export default CloseButton;
 