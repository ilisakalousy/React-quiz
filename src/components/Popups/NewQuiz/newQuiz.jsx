import React from 'react';
 
import {
    PopupWrapper,
    PopupBody,
} from "./styled";

function NewQuiz({ isShowNewQuiz, setIsShowNewQuiz }) {
  return isShowNewQuiz ? (
    <PopupWrapper
        onClick={() => setIsShowNewQuiz(false)}
    >
        <PopupBody
            onClick={e => e.stopPropagation()}
        >

        </PopupBody>
    </PopupWrapper>
  ) : null;
};
 
export default NewQuiz;
 