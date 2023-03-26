import React from 'react';

import { StyledWrapper } from './styled';
import CardList from '../CardList/cardList';
 
function QuizListWrapper({ quizCards }) {
  return (
    <StyledWrapper>
        <CardList 
          quizCards={quizCards}
        />
    </StyledWrapper>
  );
};
 
export default QuizListWrapper;
 