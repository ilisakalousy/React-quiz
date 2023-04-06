import React  from 'react';

import {
    StyledList,

} from "./styled";

import QuestionsPage from '../QuestionsPage/questionPage';
 
function QuestionsList({ pages, addingClick, pageNumber, backPageHandler, nextPageHandler, newQuizMap }) {

  const isNextDisabled = pages.length - 1 === pageNumber;

  return (
    <StyledList>
       {
        pages.map((page, index) => 
          {if (pageNumber === index+1) {
            return (
            <QuestionsPage 
              key={index}
              addingClick={addingClick}
              backPageHandler={backPageHandler}
              pageNumber={pageNumber}
              nextPageHandler={nextPageHandler}
              isNextDisabled={isNextDisabled}
              newQuizMap={newQuizMap}
            />)
          }}
        )
       }
    </StyledList>
  );
};
 
export default QuestionsList;
 