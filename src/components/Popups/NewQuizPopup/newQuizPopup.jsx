import React from 'react';
 
import NewQuizPage from '../../CreateQuiz/NewQuizPage/newQuizPage';
import CloseButton from '../../UI/CloseButton/closeButton';

import {
    PopupWrapper,
    PopupBody,
} from "./styled";

function NewQuiz({ 
  isShowNewQuiz, // popup state
  setIsShowNewQuiz // popup state changer
}) {
  return isShowNewQuiz ? (
    <PopupWrapper
        onClick={() => setIsShowNewQuiz(false)}
    >
        <PopupBody
            onClick={e => e.stopPropagation()}
        >
          <NewQuizPage />
          <CloseButton 
            onClick={() => setIsShowNewQuiz(false)}
          />
        </PopupBody>
    </PopupWrapper>
  ) : null;
};
 
export default NewQuiz;
 