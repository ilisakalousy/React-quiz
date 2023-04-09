import React from 'react';

import {
    AUSureWrapper,
    AUSureBody,
    CloseButton,
    StyledParagraph,
    ConfirmButton
} from "./styled";

 
function AreUSure({ 
    children,
    isShow, // popup state
    setIsShow // popup state changer
}) {
  return isShow ? (
    <AUSureWrapper
        onClick={() => setIsShow(false)}
    >
        <AUSureBody
            onClick={e => e.stopPropagation()}
        >
            <CloseButton 
                onClick={() => setIsShow(false)}
            />
            <StyledParagraph>
                Are you sure you want to leave this page?
            </StyledParagraph>
            {children}
        </AUSureBody>
    </AUSureWrapper>
  ) : null;
};
 
export default AreUSure;
 