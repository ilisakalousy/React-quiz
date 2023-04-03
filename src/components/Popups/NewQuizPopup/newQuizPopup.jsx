import React from 'react';
 
import NewQuizPage from '../../CreateQuiz/NewQuizPage/newQuizPage';

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
          <NewQuizPage />
        </PopupBody>
    </PopupWrapper>
  ) : null;
};
 
export default NewQuiz;
 