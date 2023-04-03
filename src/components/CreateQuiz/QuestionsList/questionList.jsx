import React, { useState } from 'react';

import {
    StyledList,

} from "./styled";

import QuestionsPage from '../QuestionsPage/questionPage';
 
function QuestionsList({ pages, addingClick, pageNumber, backPageHandler }) {

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
            />)
          }}
        )
       }
    </StyledList>
  );
};
 
export default QuestionsList;
 