import React, { useState } from 'react';

import {
    StyledNewQuiz,
    StyledHeading
} from "./styled";

import NewQuizForm from '../../Forms/NewQuiz/newQuiz';
import QuestionsList from '../QuestionsList/questionList';
 
function NewQuizPage() {

  const [pageNumber, setPageNumber] = useState(0);
  const [pages, setPages] = useState([]);

  const addingClick = (e) => {
    e.preventDefault();
    const newPage = `item-${pageNumber}`;
    for (let page = 0; page <= pageNumber; page++) {
      setPages([...pages, newPage]);
    };
    setPageNumber(pageNumber + 1); 
  };

  const backPageHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
    pages.pop();
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
  };

  const newQuizMap = new Map();

  return (
    <StyledNewQuiz>
      {pageNumber === 0 ?
      <>
          <StyledHeading>Create new quiz!</StyledHeading>
          <NewQuizForm 
            pages={pages}
            addingClick={addingClick}
          />
      </>
        :
         <QuestionsList 
            pages={pages}
            addingClick={addingClick}
            pageNumber={pageNumber}
            backPageHandler={backPageHandler}
            nextPageHandler={nextPageHandler}
            newQuizMap={newQuizMap}
         />
      }
    </StyledNewQuiz>
  );
};
 
export default NewQuizPage;
 