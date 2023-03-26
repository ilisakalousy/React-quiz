import React from 'react';

import { 
    StyledCard,
    StyledAuthor,
    StyledHeading,
    StyledImg,
    StyledQuantity,
    CardBottom
} from './styled';
 
function QuizCard({ quizCard }) {
  return (
    <StyledCard>
        <StyledImg src={quizCard.img} />
        <StyledHeading>{quizCard.title}</StyledHeading>
        <CardBottom>
            <StyledQuantity>Questions: {quizCard.questions}</StyledQuantity>
            <StyledAuthor>Author: {quizCard.author}</StyledAuthor>
        </CardBottom>
    </StyledCard>
  );
};
 
export default QuizCard;
 