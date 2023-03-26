import React from 'react';
 
import { StyledList } from './styled';
import QuizCard from '../QuizCard/quizCard';

function CardList({ quizCards }) {
  return (
    <StyledList>
        {
            quizCards &&
            quizCards.map((quizCard) => (
                <QuizCard
                    key={quizCard.id}
                    quizCard={quizCard}
                />
            ))
        }
    </StyledList>
  );
};
 
export default CardList;
 